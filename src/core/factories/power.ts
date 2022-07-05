import { Power as IPower} from '../interfaces'
import { Effect, DEFAULT_EFFECT } from './effect'

export class Power implements IPower {
    Cost: number
    Effect: Effect

    constructor(Effect: Effect, Cost = 2) {
        this.Effect = Effect
        this.Cost = Cost
    }

    // 是否可选择目标
    Targeted() {
        return this.Effect.Targeted()
    }
}

export const DEFAULT_POWER = new Power(DEFAULT_EFFECT)