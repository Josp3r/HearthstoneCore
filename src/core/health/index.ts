export default class Health {
    Total: number
    Current: number
    constructor(Total: number) {
        this.Total = Total
        this.Current = Total
    }

    Get() {
        return {
            Total: this.Total,
            Current: this.Current,
        }
    }
}