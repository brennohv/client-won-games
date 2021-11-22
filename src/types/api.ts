export type GamesAPI = {
  name: string
  cover: ImageAPI
  developers: DevelopersAPI[]
  price: number
}

export type ImageAPI = {
  url: string
}

export type DevelopersAPI = {
  name: string
}
