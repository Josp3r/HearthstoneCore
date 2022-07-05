import { EffectTarget as IEffectTarget, EffectTargetType } from '../types'

export class AttackTarget {}

export class EffectTarget implements IEffectTarget {
    Type: EffectTargetType
    Random: number
    constructor(Type: EffectTargetType, Random = 0) {
        this.Type = Type
        this.Random = Random
    }

    static EffectTargetType = EffectTargetType
}