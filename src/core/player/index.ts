import { BattlePlayer as IBattlePlayer, CardType, EffectType, HandCard as IHandCard, HandCardStatus, Hero, Weapon } from '../types'
import { Card, SpellCard, MinionCard } from '../card'
import { Effect, ManaCrystalEffect } from '../effect'
import Minion from '../minion'
import PDefer from 'p-defer'

class HandCard implements IHandCard {
    Status: HandCardStatus = HandCardStatus.Normal
    Card: Card
    Change = {
        Cost: undefined,
        Attack: undefined,
        Health: undefined,
    }

    constructor(Card: Card) {
        this.Card = Card
    }

    GetCost() {
        return this.Change.Cost || this.Card.Cost
    }

    Usable(LeftManaCrystal: number) {
        return LeftManaCrystal >= this.GetCost()
    }
}

const MAX_HAND = 10
const Max_MINION = 7

class Player implements IBattlePlayer {
    Hero: Hero
    Deck: Card[]
    Hand: HandCard[] = []
    Health: number = 30
    Armor: number = 0
    ManaCrystal = {
        Total: 0,
        Left: 0,
        Locked: 0,
        Bonus: 0,
    }
    Weapon: Weapon | null = null
    Minions: Minion[] = []
    Fatigue: number = 0
    // 选择位置
    
    constructor(Hero: Hero, Deck: Card[]) {
        this.Hero = Hero
        this.Deck = Deck
    }

    Initial(First: boolean) {
        if (First) {
            this.DrawCard(3)
        } else {
            this.DrawCard(4)
            this.TakeTheCoin()
        }
    }

    TakeTheCoin() {
        this.Hand.push(new HandCard(new SpellCard({
            ID: '',
            Series: SpellCard.CardSeries.None,
            Class: SpellCard.CardClass.None,
            Type: SpellCard.CardType.Spell,
            Rarity: SpellCard.CardRarity.Common,
            Name: '硬币',
            Pic: '',
            Desc: '',
            Cost: 0,
            School: SpellCard.SpellSchool.None,
            Effects: [
                new ManaCrystalEffect(
                    ManaCrystalEffect.EffectPlayer.You,
                    ManaCrystalEffect.ManaCrystalEffectType.Gain,
                    1,
                    ManaCrystalEffect.ManaCrystalType.Bonus,
                )
            ],
        })))
    }

    DrawMaxHandCard() {
        this.DrawCard(MAX_HAND - this.Hand.length)
    }

    DrawCard(n: number) {
        if (n <= 0) {
            return
        }
        while (n > 0) {
            const GameOver = this.DrawACard()

            if (GameOver) {
                return true
            }

            n--
        }
    }

    DrawACard() {
        if (this.Deck.length <= 0) {
            return this.GetFatigue()
        }

        const Card = this.Deck.shift()

        if (Card) {
            if (this.Hand.length === MAX_HAND) {
                // TODO: 删除service注入
            } else {
                this.Hand.push(new HandCard(Card))
            }
        }

        return false
    }

    GetFatigue() {
        this.Fatigue++
        this.Health -= this.Fatigue
        if (this.Health <= 0) {
            return true
        }
        return false
    }

    async Choose(index: number) {
        const HandCard = this.Hand[index]
        
        const Cost = HandCard.GetCost()

        if (Cost > this.ManaCrystal.Left) {
            return Promise.reject('我没有足够的法力值')
        }

        try {
            
            switch (HandCard.Card.Type) {
                case Card.CardType.Minion:
                    await this.Summon(HandCard, await this.ChooseMinionPosition())
                    break
            }

            this.ConsumeManaCrystal(Cost)
        } catch (error) {
            
        }
    }

    async ChooseMinionPosition(): Promise<number> {
        try {
            
        } catch (error) {
            
        }

        return 0
    }


    Summon(HandCard: HandCard, Position: number) {
        const _Minion = new Minion(HandCard.Card as MinionCard, HandCard.Change)
        this.Minions.push(_Minion)
    }

    // 消耗法力水晶
    ConsumeManaCrystal(Cost: number) {
        if (Cost > this.ManaCrystal.Left) {
            return
        }

        this.ManaCrystal.Left -= Cost
    }

    HasTauntMinion() {
        for (let i = 0; i < this.Minions.length; i++) {
            if (this.Minions[i].IsTaunt()) {
                return true
            }
        }

        return false
    }

}

export default Player