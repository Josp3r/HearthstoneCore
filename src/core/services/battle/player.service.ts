import { injectable } from 'inversify'

@injectable()
export class PlayerService {
    constructor(
    ) {}

    
}

export const PlayerSymbol = Symbol.for('Player')