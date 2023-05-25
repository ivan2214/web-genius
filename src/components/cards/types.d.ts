export interface Plan {
  name: string
  shortDescription: string
  price: {
    ars: number
    usd: number
  }
  options: string[]
  extras: string[]
}
