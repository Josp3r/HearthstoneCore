import { Effect } from './effect'

export enum Side {
    Our,
    Opposite,
    All,
    Each,
}
export enum ClassKind {
    None,
    Mage,
    Warrior,
    Neutral,
}

export interface Power {
    Cost: number,
    Effect: Effect,
}

export interface Hero {
    Class: ClassKind,
    Power: Power,
}