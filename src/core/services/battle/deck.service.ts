import { injectable, inject } from 'inversify'
import { PlayerSymbol, PlayerService } from './player.service'
// import { Card } from '../../card' 

@injectable()
export class DeckService {
    constructor(
        @inject(PlayerSymbol) private PlayerService: PlayerService,
    ) {}

    Load() {

    }

    Draw(n: number) {
        
    }
}

export const DeckSymbol = Symbol.for('Deck')