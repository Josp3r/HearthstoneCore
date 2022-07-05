import { MinionCard } from '../card'
import Health from '../health'

export enum MinionStatus {
    // 普通
    Normal,
}

export interface Minion {
    Status: MinionStatus,
    Card: MinionCard,
    Attack: number,
    Health: Health,
    Charge: boolean;
    Rush: boolean;
    Lifesteal: boolean,
    Windfury: boolean;
    DivineShield: boolean,
    UnableToAttack: boolean,
    Frozen: boolean,
    Silenced: boolean,
    Asleep: boolean
}
