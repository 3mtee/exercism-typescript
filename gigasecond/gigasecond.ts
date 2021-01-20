class Gigasecond {
    constructor(private inDate: Date) {
    }

    date(): Date {
        return new Date(this.inDate.getTime() + 1_000_000_000_000)
    }
}

export default Gigasecond
