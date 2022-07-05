import { injectable } from 'inversify'
import { Card } from '../../card' 

@injectable()
export class DeckService {
    constructor(
    ) {}

    Load(Cards: Card[]) {
        
    }

    Draw(n: number) {
        
    }
}

export const DeckSymbol = Symbol.for('Deck')