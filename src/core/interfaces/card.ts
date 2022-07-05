import { ClassKind } from './basic'
import { Effect } from './effect'

export enum CardSet {
    None,
    Basic,
}

export enum Rarity {
    Common,
    Rare,
    Epid,
    Legendary,
}

export enum CardType {
    None,
    Minion,
    Spell,
    Weapon,
    Hero,
}

export enum MinionType {
    None,
    Murloc,
    Demon,
    Mech,
    Elemental,
    Beast,
    Totem,
    Pirate,
    Dragon,
    Quilboar,
    Nega,
    All,
}

export interface MinionCardConfig {
    // 攻击力
    Attack: number,
    // 生命值
    Health: number,
}

export interface WeaponCardConfig {
    // 攻击力
    Attack: number,
    // 耐久
    Durability: number,
}

export interface Card {
    ID: string,
    // 基本属性
    Set: CardSet,
    Class: ClassKind,
    Type: CardType,
    Rarity: Rarity,
    // 显示用
    Name: string,
    Pic: string,
    Desc: string,
    // 数值相关
    Cost: number,
}

export interface MinionCard extends Card {
    MinionConfig: {
        // 随从类型
        MinionType: MinionType,
        // 攻击力
        Attack: number,
        // 生命值
        Health: number,
        // 嘲讽
        Taunt: boolean,
        // 冲锋
        Charge: boolean,
        // 突袭
        Rush: boolean,
        // 吸血
        Lifesteal: boolean,
        // 风怒
        Windfury: boolean,
        // 圣盾
        DivineShield: boolean,
        // 无法攻击
        UnableToAttack: boolean
    },
    Battlecry: Effect[],
    Deathrattle: Effect[],
}

export interface WeaponCard extends Card {
    // 攻击力
    Attack: number,
    // 耐久
    Durability: number,
    // 吸血
    Lifesteal: boolean,
    // 风怒
    Windfury: boolean,
    Battlecry: Effect[],
    Deathrattle: Effect[],
}

export enum SpellSchool {
    None,
    Arcane,
    Fire,
    Frost,
    Nature,
    Holy,
    Shadow,
    Fel,
}

export interface SpellCard extends Card {
    // 派系
    School: SpellSchool,
    // 效果
    Effects: Effect[],
}

export interface SecretCard extends SpellCard {

}