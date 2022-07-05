import { injectable, inject } from 'inversify'
import { HeroSymbol, HeroService } from './hero.service'
import { MinionSymbol, MinionService } from './minion.service'

@injectable()
export class CharacterService {
    constructor(
        @inject(HeroSymbol) HeroService: HeroService,
        @inject(MinionSymbol) MinionService: MinionService
    ) {}

    ToAttack() {
        
    }
}