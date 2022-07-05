import { injectable } from 'inversify'

enum CurrentOf {
    Initial,
    PlayerA,
    PlayerB,
}

@injectable()
export class TurnService {
    private CurrentOf: CurrentOf = CurrentOf.Initial
    constructor(
    ) {}

    // 猜先（掷硬币）
    Toss() {
        this.CurrentOf = Math.random() > 0.5 ? CurrentOf.PlayerA : CurrentOf.PlayerB
    }

    // 切换回合
    ChangeTurn() {
        if (this.CurrentOf === CurrentOf.PlayerA) {
            this.CurrentOf = CurrentOf.PlayerB
        }
    }
}

export const TurnSymbol = Symbol.for('Turn')