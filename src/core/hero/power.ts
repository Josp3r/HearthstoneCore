import { Effect } from '../effect'

class Power {
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

export default Power