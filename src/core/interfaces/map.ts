import { Card } from './card'


export interface CardMap {
    // 按系列
    Set: {
        [propName: string]: Card[],
    },
    // 按类型
    type: {
        [propName: string]: Card[],
    },
    // 按职业
    class: {
        [propName: string]: Card[],
    },
}