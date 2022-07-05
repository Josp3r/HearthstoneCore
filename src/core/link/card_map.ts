import cards from '../cards'
import { Card, CardMap } from '../types'

const cardMap: CardMap = {
    series: {},
    type: {},
    class: {},
}

const _add2List = (object: Record<string, Card[]>, key: string, card: Card) => {
    if (object[key]) {
        object[key].push(card)
    } else {
        object[key] = [card]
    }
}

export const linkCardMap = () => {
    cards.forEach((card: Card) => {
        _add2List(cardMap.type, String(card.Type), card)
        _add2List(cardMap.series, String(card.Series), card)
        _add2List(cardMap.class, String(card.Class), card)
    })
}

export const getCardFromMap = (id: string) => {}