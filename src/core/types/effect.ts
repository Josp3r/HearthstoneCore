import {
    MinionType,
    Rarity,
} from './card'
import {
    Side,
} from './basic'

export enum EffectType {
    None,
    Summon,
    Destroy,
    Damage,
    Armor,
    ManaCrystal,
}

export enum EffectPlayer {
    You,
    Enemy,
    Both,
}

export enum EffectSummonDisplayDirection {
    Left,
    Right,
    CenterSpread,
}

export interface EffectSummonMinion {
    ID?: string,
    Random?: {
        Type?: MinionType,
        Rarity?: Rarity,
        Cost?: number,
    }
}

export interface SummonEffectOptions {
    Left: EffectSummonMinion[],
    Right: EffectSummonMinion[],

}
export enum EffectTargetType {
    // 英雄
    Hero,
    // 随从
    Minion,
    // 角色（英雄\随从）
    Character,
}

export enum WeaponEffectType {
    Equip,
    Destroy,
}

export interface WeaponEffectEquip {
    ID?: string,
    Random?: {
        Type?: MinionType,
        Rarity?: Rarity,
        Cost?: number,
    }
}

export interface WeaponEffectOptions {
    Type: WeaponEffectType,
    Equip?: WeaponEffectEquip,
}

export interface EffectTarget {
    // 类型
    Type: EffectTargetType,
    // 有random则随机，没有则须选取
    Random: number
}

export interface DestroyEffectOptions {
    Target: EffectTarget,
}

export interface DamegeEffectOptions {
    Target: EffectTarget,
    Value: number,
}

export enum ManaCrystalType {
    // 仅在本回合
    Bonus,
    // 空的
    Empty,
    // 正常的
    Normal,
}

export enum ManaCrystalEffectType {
    // 获得
    Gain,
    // 改变
    Change,
    // 摧毁水晶
    Destroy,
    // 封锁
    Lock,
}

export interface ManaCrystalEffectOptions {
    Type: ManaCrystalEffectType,
    Gain?: {
        Type: ManaCrystalType,
        Value: number,
    },
    Change?: number,
    Destroy?: number,
    Lock?: number,
}

export interface Effect {
    Type: EffectType,
    Player: EffectPlayer,
    Summon?: SummonEffectOptions
    Destroy?: DestroyEffectOptions
    Damage?: DamegeEffectOptions,
    Armor?: number,
    ManaCrystal?: ManaCrystalEffectOptions,
    Weapon?: WeaponEffectOptions,
}