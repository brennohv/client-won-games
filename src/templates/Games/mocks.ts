import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [
        {
          name: 'Messiah',
          slug: 'messiah',
          price: 8.89,
          cover: {
            url: '/uploads/messiah_e161e802b0.jpg'
          },
          developers: [{ name: 'Shiny Entertainment' }],
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1, where: {} }
  },
  result: {
    data: {
      games: [
        {
          name: 'Outward: The Soroboreans',
          slug: 'outward-the-soroboreans',
          price: 14.99,
          cover: {
            url: '/uploads/outward_the_soroboreans_92ca7fac8f.jpg'
          },
          developers: [{ name: 'Nine Dots Studio' }],
          __typename: 'Game'
        }
      ]
    }
  }
}
