import { injectable, inject } from 'inversify'
import { PlayerSymbol, PlayerService } from './player.service'

enum ThisTurnOwner {
    Initial,
    PlayerA,
    PlayerB,
}

@injectable()
export class TurnService {
    private ThisTurnOwner: ThisTurnOwner = ThisTurnOwner.Initial
    constructor(
        @inject(PlayerSymbol) private PlayerService: PlayerService,
    ) {}

    // 猜先（掷硬币）
    Toss() {
        this.ThisTurnOwner = Math.random() > 0.5 ? ThisTurnOwner.PlayerA : ThisTurnOwner.PlayerB
    }

    // 切换回合
    ChangeTurn() {
        if (this.ThisTurnOwner === ThisTurnOwner.PlayerA) {
            this.ThisTurnOwner = ThisTurnOwner.PlayerB
        } else {
            this.ThisTurnOwner = ThisTurnOwner.PlayerA
        }
    }

    GetThisTurnPlayer() {
        return this.ThisTurnOwner
    }
}

export const TurnSymbol = Symbol.for('Turn')