import { Effect as IEffect, EffectType, EffectPlayer, ManaCrystalEffectType, ManaCrystalType, ManaCrystalEffectOptions, DamegeEffectOptions, DestroyEffectOptions, SummonEffectOptions, WeaponEffectOptions } from '../types'
import { EffectTarget } from '../target'


export class Effect implements IEffect {
    Type: EffectType = EffectType.None
    Player: EffectPlayer
    constructor(options: IEffect) {
        this.Type = options.Type
        this.Player = options.Player
    }

    Targeted() {
        return false
    }

    static EffectType = EffectType
    static EffectPlayer = EffectPlayer
}

export class DestroyEffect extends Effect {
    constructor(Player: EffectPlayer, Target: EffectTarget) {
        super({
            Type: Effect.EffectType.Destroy,
            Player,
            Destroy: {
                Target,
            },
        })
    }

    Targeted() {
        return true
    }
}

export class DamageEffect extends Effect {
    CurrentDamage: number = 0
    constructor(Player: EffectPlayer, Target: EffectTarget, Value: number) {
        super({
            Type: Effect.EffectType.Damage,
            Player,
            Damage: {
                Target,
                Value,
            },
        })
        this.CurrentDamage = Value
    }

    Targeted() {
        return true
    }
}

export class ManaCrystalEffect extends Effect {
    constructor(Player: EffectPlayer, Type: ManaCrystalEffectType, Value: number, GainManaCrystalType?: ManaCrystalType) {
        const ManaCrystalEffectOptions: ManaCrystalEffectOptions = {
            Type,
        }

        switch (Type) {
            case ManaCrystalEffectType.Gain:
                ManaCrystalEffectOptions.Gain = {
                    Type: GainManaCrystalType || ManaCrystalType.Bonus,
                    Value,
                }
                break
            case ManaCrystalEffectType.Change:
                ManaCrystalEffectOptions.Change = Value
                break
            case ManaCrystalEffectType.Destroy:
                ManaCrystalEffectOptions.Destroy = Value
                break
            case ManaCrystalEffectType.Lock:
                ManaCrystalEffectOptions.Lock = Value
                break
        }

        super({
            Type: Effect.EffectType.ManaCrystal,
            Player,
            ManaCrystal: ManaCrystalEffectOptions,
        })
    }

    static ManaCrystalEffectType = ManaCrystalEffectType
    static ManaCrystalType = ManaCrystalType
}