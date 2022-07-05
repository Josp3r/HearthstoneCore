import { MinionCard, CardType, ClassKind, Rarity, CardSeries } from '../../../types'

const cards: Card[] = [
    {
        ID: 'basic_neutral_minion_1',
        Series: CardSeries.Basic,
        Type: CardType.Minion,
        Class: ClassKind.Neutral,
        Rarity: Rarity.Common,
        Name: '随从1号',
        Pic: '',
        Desc: '这是第一张随从，没什么异能',
        Attack: 2,
        Health: 1,
        Cost: 1,
    }
]

export default cards