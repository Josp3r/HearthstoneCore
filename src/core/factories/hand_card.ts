import { HandCard as IHandCard, HandCardStatus } from '../interfaces'
import { Card } from '../card'

export class HandCard implements IHandCard {
    Status: HandCardStatus = HandCardStatus.Normal
    Card: Card
    Change = {
        Cost: undefined,
        Attack: undefined,
        Health: undefined,
    }

    constructor(Card: Card) {
        this.Card = Card
    }

    GetCost() {
        return this.Change.Cost || this.Card.Cost
    }

    Usable(LeftManaCrystal: number) {
        return LeftManaCrystal >= this.GetCost()
    }
}
