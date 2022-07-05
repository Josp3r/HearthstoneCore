import { MinionCard } from '../card'
import { Minion as IMinion, MinionStatus } from '../types'
import { isUndefined } from '../shared'
import Player from '../player'
import Health from '../health'

class Minion implements IMinion {
    Status: MinionStatus = MinionStatus.Normal
    Card: MinionCard
    Attack: number
    Health: Health
    Taunt: boolean
    Charge: boolean
    Rush: boolean
    Lifesteal: boolean
    Windfury: boolean
    DivineShield: boolean
    UnableToAttack: boolean
    Frozen: boolean = false
    Silenced: boolean = false
    Asleep: boolean = true
    constructor(Card: MinionCard, Change: { Attack?: number, Health?: number}) {
        this.Card = Card
        this.Taunt = Card.MinionConfig.Taunt
        this.Charge = Card.MinionConfig.Charge
        this.Rush = Card.MinionConfig.Rush
        this.Lifesteal = Card.MinionConfig.Lifesteal
        this.Windfury = Card.MinionConfig.Windfury
        this.DivineShield = Card.MinionConfig.DivineShield
        this.UnableToAttack = Card.MinionConfig.UnableToAttack

        if (!isUndefined(Change.Attack)) {
            this.Attack = Change.Attack as number
        } else {
            this.Attack = Card.MinionConfig.Attack
        }
        if (!isUndefined(Change.Health)) {
            this.Health = new Health(Change.Health as number)
        } else {
            this.Health = new Health(Card.MinionConfig.Health)
        }
    }

    Awake() {
        if (!this.Asleep) {
            return
        }

        this.Asleep = false
    }

    AttackHighlight() {
        return this.Attack > this.Card.MinionConfig.Attack
    }

    HealthHighlight() {
        return (this.Health.Current === this.Health.Total) && this.Health.Total > this.Card.MinionConfig.Health
    }

    GetAttack() {
        return this.Attack
    }

    GetHealth() {
        return this.Health.Get()
    }

    IsTaunt() {
        return this.Taunt
    }

    async Attackable() {
        if (this.Frozen) {
            return Promise.reject('冰冻的随从无法攻击')
        }

        if (this.UnableToAttack) {
            return Promise.reject('该随从无法攻击')
        }

        if (this.Attack === 0) {
            return Promise.reject('没有攻击力的随从无法攻击')
        }

        return true
    }

    Silence() {
        this.Silenced = true
        if (this.Charge) {
            this.Charge = false
        }
        if (this.Rush) {
            this.Rush = false
        }
        if (this.Lifesteal) {
            this.Lifesteal = false
        }
        if (this.Windfury) {
            this.Windfury = false
        }
        if (this.DivineShield) {
            this.DivineShield = false
        }
        if (this.UnableToAttack) {
            this.UnableToAttack = false
        }
    }

    ChangeAttack(n: number) {}

    Damaged() {
        return this.Health.Current < this.Health.Total
    }
    
    async ToAttack(EnemyPlayer: Player, Minion?: Minion) {
        try {
            await this.Attackable()
            // 攻击随从
            if (Minion) {
                if (EnemyPlayer.HasTauntMinion() && !Minion.IsTaunt()) {
                    return Promise.reject('你必须优先攻击敌方具有嘲讽的随从')
                }

                this.Knock(Minion.GetAttack())
                Minion.Knock(this.GetAttack())
            }
        } catch (error) {
            return Promise.reject(error)
        }

    }

    Knock(Attack: number) {
        this.Health.Current -= Attack
    }
}

export default Minion