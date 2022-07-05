import { injectable, inject} from 'inversify'
import { PlayerSymbol, PlayerService } from './player.service'
import { TurnSymbol, TurnService } from './turn.service'
import { DeckSymbol, DeckService } from './deck.service'
import { ReadyPlayer } from '../../interfaces'
@injectable()
export class BattleService {
    constructor(
        @inject(PlayerSymbol) private PlayerService: PlayerService,
        @inject(TurnSymbol) private TurnService: TurnService,
        @inject(DeckSymbol) private DeckService: DeckService,
    ) {}

    async Start(Players: ReadyPlayer[]) {
        await this.PlayerService.Initial(Players)
        await this.DeckService.Load()
        await this.TurnService.Toss()
    }
}

export const BattleSymbol = Symbol.for('Battle')