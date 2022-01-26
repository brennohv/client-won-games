import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export const gameMock = (id: string) => ({
  id,
  cover: {
    url: '/uploads/teste'
  },
  developers: [
    {
      name: 'teste'
    }
  ],
  name: `teste ${id}`,
  price: 50,
  slug: `teste ${id}`,
  __typename: 'Game'
})

export const wishlistMock = {
  //objeto tem que ser igual a requisição e resposta, caso contrario vai retornar um objeto vazio
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'brennovicentini@gmail.com'
    }
  },
  result: {
    data: {
      wishlists: [
        {
          id: 1,
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}

export const wishlistItems = [
  // objeto que vou receber assim que tratar com o wishlistMapper
  {
    id: '1',
    title: 'teste 1',
    slug: 'teste 1',
    img: 'http://localhost:1337/uploads/teste',
    developer: 'teste',
    price: 50
  },
  {
    id: '2',
    title: 'teste 2',
    slug: 'teste 2',
    img: 'http://localhost:1337/uploads/teste',
    developer: 'teste',
    price: 50
  },
  {
    id: '3',
    title: 'teste 3',
    slug: 'teste 3',
    img: 'http://localhost:1337/uploads/teste',
    developer: 'teste',
    price: 50
  }
]
