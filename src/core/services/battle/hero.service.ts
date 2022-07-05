import { injectable } from 'inversify'

@injectable()
export class HeroService {
    constructor(
    ) {}
}

export const HeroSymbol = Symbol.for('Hero')