export interface Point {
    id: number,
    code?: string,
    name: string,
    nickname?: string,
    massif: string,
    description?: string,
    countyCode: string,
    countyName?: string,
    altitude?: number,
    publicTransport?: boolean,
    car?: boolean
}
