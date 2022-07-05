import { injectable } from 'inversify'

@injectable()
export class MinionService {
    constructor(
    ) {}
}

export const MinionSymbol = Symbol.for('Minion')