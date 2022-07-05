import { Effect, DamageEffect } from "../effect"
import { ClassKind } from '../types'
import { EffectTarget } from '../target'
import { Power, DEFAULT_POWER } from './power'
import { Hero as IHero } from '../interfaces'

export class Hero implements IHero {
    Class: ClassKind
    Image: string
    Name: string
    Power: Power
    constructor(Class: ClassKind, Image: string, Name: string, Power: Power) {
        this.Class = Class
        this.Image = Image
        this.Name = Name
        this.Power = Power
    }
}

export const DEFAULT_HERO = new Hero(ClassKind.None, '', '', DEFAULT_POWER)

export class Warrior extends Hero {
    constructor(Image: string, Name: string) {
        super(
            ClassKind.Warrior,
            Image || '',
            Name || '加尔鲁什',
            new Power(
                new Effect({
                    Player: Effect.EffectPlayer.You,
                    Type: Effect.EffectType.Armor,
                    Armor: 2,
                })
            )
        )
    }
}


export class Mage extends Hero {
    constructor(Image: string, Name: string) {
        super(
            ClassKind.Warrior,
            Image || '',
            Name || '吉安娜',
            new Power(
                new DamageEffect(
                    Effect.EffectPlayer.Both,
                    new EffectTarget(EffectTarget.EffectTargetType.Character),
                    1,
                )
            )
        )
    }
}