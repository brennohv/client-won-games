import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [
        {
          id: 1,
          name: 'Messiah',
          slug: 'messiah',
          price: 8.89,
          cover: {
            url: '/uploads/messiah_e161e802b0.jpg'
          },
          developers: [{ name: 'Shiny Entertainment' }],
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
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
          id: 2,
          name: 'Outward: The Soroboreans',
          slug: 'outward-the-soroboreans',
          price: 14.99,
          cover: {
            url: '/uploads/outward_the_soroboreans_92ca7fac8f.jpg'
          },
          developers: [{ name: 'Nine Dots Studio' }],
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}
