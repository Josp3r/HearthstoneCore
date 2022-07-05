import { Deck, Hero } from './basic'
import { Effect } from './effect'
import { Card } from '../card'
import Minion from '../minion'

/**
 * 手牌状态
 */
export enum HandCardStatus {
    // 普通
    Normal,
    // 点燃（回合倒数摧毁）
    Burning,
    //
}

/**
 * 手牌
 */
export interface HandCard {
    // 手牌状态
    Status: HandCardStatus,
    // 卡牌
    Card: Card,
    // 卡片变化
    Change: {
        Cost?: number
        Attack?: number
        Health?: number
    },
}

/**
 * 战斗回合事件类型
 */
export enum BattleTurnEventType {
    // 攻击
    Attack,
    // 效果
    Effect,
}

/**
 * 战斗回合攻击事件目标类型
 */
export enum BattleTurnAttackEventTargetType {
    // 英雄
    Hero,
    // 随从
    Minion,
}

/**
 * 战斗回合攻击事件目标
 */
export interface BattleTurnAttackEventTarget {
    Type: BattleTurnAttackEventTargetType,
    Attack: number,
    Damage: number,
    Health: number,
    Card?: Card,
} 

export interface BattleTurnEvent {
    Type: BattleTurnEventType,
    Attack?: {
        from: BattleTurnAttackEventTarget,
        to: BattleTurnAttackEventTarget,
    },
    Effect?: Effect,
}

export interface BattleTurn {
    // 回合开始时(auto)
    Start: BattleTurnEvent[]
    // 回合期间
    Process: BattleTurnEvent[]
    // 回合结束时(auto)
    End: BattleTurnEvent[]
}

export interface BattlePlayer {
    Hero: Hero,
    Deck: Card[],
    Hand: HandCard[],
    Health: number,
    Armor: number,
    ManaCrystal: {
        Total: number,
        Left: number,
        Locked: number,
        Bonus: number,
    },
    Weapon: Weapon | null,
    Minions: Minion[],
    Fatigue: number,
}

export interface Weapon {
    Card: Card,
    Change: {
        Attack: number,
        Durability: number,
    },
}

export interface Battle {
    Config: {
        Scene: number,
    },
    PlayerA: BattlePlayer,
    PlayerB: BattlePlayer,
    Turns: BattleTurn[],
}

export interface ReadyPlayer {
    ID: string;
    Deck: Deck;
}