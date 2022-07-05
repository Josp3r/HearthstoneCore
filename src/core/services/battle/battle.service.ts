import { injectable, inject} from 'inversify'
import { TurnSymbol, TurnService } from './turn.service'

@injectable()
export class BattleService {
    constructor(
        @inject(TurnSymbol) TurnService: TurnService
    ) {}

    
}

export const BattleSymbol = Symbol.for('Battle')