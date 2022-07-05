import { Card as ICard, CardSet, CardType, ClassKind, Rarity, MinionCard as IMinionCard, Effect, SpellCard as ISpellCard, SpellSchool, MinionType } from '../types'
export class Card implements ICard {
    ID: string
    Set: CardSet
    Class: ClassKind
    Type: CardType
    Rarity: Rarity
    Name: string
    Pic: string
    Desc: string
    Cost: number

    constructor(CardConfig: ICard) {
        this.ID = CardConfig.ID
        this.Set = CardConfig.Set
        this.Class = CardConfig.Class
        this.Type = CardConfig.Type
        this.Rarity = CardConfig.Rarity
        this.Name = CardConfig.Name
        this.Pic = CardConfig.Pic
        this.Desc = CardConfig.Desc
        this.Cost = CardConfig.Cost
    }

    static CardSet = CardSet
    static CardClass = ClassKind
    static CardType = CardType
    static CardRarity = Rarity

}

export class MinionCard extends Card implements IMinionCard {
    MinionConfig: { MinionType: MinionType; Attack: number; Health: number; Taunt: boolean; Charge: boolean; Rush: boolean; Lifesteal: boolean; Windfury: boolean; DivineShield: boolean; UnableToAttack: boolean }
    Battlecry: Effect[]
    Deathrattle: Effect[]
    constructor(CardConfig: IMinionCard) {
        super(CardConfig)
        this.MinionConfig = CardConfig.MinionConfig
        this.Battlecry = CardConfig.Battlecry
        this.Deathrattle = CardConfig.Deathrattle
    }

    static MinionType = MinionType
}


export class SpellCard extends Card implements ISpellCard {
    School: SpellSchool
    Effects: Effect[]
    constructor(CardConfig: ISpellCard) {
        super(CardConfig)
        this.School = CardConfig.School
        this.Effects = CardConfig.Effects
    }

    static SpellSchool = SpellSchool
}
