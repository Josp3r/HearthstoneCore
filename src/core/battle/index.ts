import { Battle as IBattle, BattleTurn } from '../types'
import Player from '../player'

class Battle implements IBattle {
    Config: { Scene: number; };
    Turns: BattleTurn[];
    PlayerA: Player;
    PlayerB: Player;
    constructor(Players: Player[]) {
        this.PlayerA = Players[0]
        this.PlayerB = Players[1]
        this.Turns = []
        this.Config = {
            Scene: 1
        }
    }

    
}

export default Battle