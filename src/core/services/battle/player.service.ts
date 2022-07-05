import { injectable, inject } from 'inversify'
import { BattlePlayer, DEFAULT_BATTLE_PLAYER } from '../../factories/battle_player'
import { TurnSymbol, TurnService } from './turn.service'
import { DeckSymbol, DeckService } from './deck.service'
import {
    ReadyPlayer,
} from '../../interfaces'
import { Hero } from '../../factories/hero'
import { Power } from '../../factories/power'
import { Effect } from '../../factories/effect'
@injectable()
export class PlayerService {
    public PlayerA: BattlePlayer = DEFAULT_BATTLE_PLAYER
    public PlayerB: BattlePlayer = DEFAULT_BATTLE_PLAYER

    constructor(
        @inject(TurnSymbol) private TurnService: TurnService,
        @inject(DeckSymbol) private DeckService: DeckService,
    ) {
    }

    Initial(Players: ReadyPlayer[]) {
        this.PlayerA = new BattlePlayer(new Hero(
            Players[0].Deck.Hero.Class,
            Players[0].Deck.Hero.Image,
            Players[0].Deck.Hero.Name,
            new Power(
                new Effect(
                    Players[0].Deck.Hero.Power.Effect,
                )
            ),
        ), Players[0].Deck.Cards)
        this.PlayerB = new BattlePlayer(new Hero(
            Players[1].Deck.Hero.Class,
            Players[1].Deck.Hero.Image,
            Players[1].Deck.Hero.Name,
            new Power(
                new Effect(
                    Players[1].Deck.Hero.Power.Effect,
                )
            ),
        ), Players[1].Deck.Cards)
    }

    Draw() {
        this.PlayerA.DrawACard()
    }
}

export const PlayerSymbol = Symbol.for('Player')