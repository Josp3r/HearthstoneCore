import { Effect } from './effect'
import { Card } from './card'

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
    Image: string
    Name: string
    Power: Power,
}

export interface Deck {
    Hero: Hero;
    Cards: Card[];
}