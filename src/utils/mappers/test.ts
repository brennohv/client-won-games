import { ordersMapper } from './index'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper, cartMapper } from '.'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'title test',
      subtitle: 'subtitle teste',
      button: {
        label: 'label test',
        link: 'link test'
      },
      ribbon: {
        text: 'ribbon test',
        size: 'extraLarge',
        color: 'primary'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: `http://localhost:1337/image.jpg`,
        title: 'title test',
        subtitle: 'subtitle teste',
        buttonLabel: 'label test',
        buttonLink: 'link test',
        ribbon: 'ribbon test',
        ribbonSize: 'extraLarge',
        ribbonColor: 'primary'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const game = {
      id: 'id',
      name: 'name',
      slug: '/game',
      price: 50,
      cover: {
        url: '/url'
      },
      developers: [
        {
          name: 'developers1'
        }
      ]
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: 'id',
        title: 'name',
        slug: '/game',
        developer: 'developers1',
        img: `http://localhost:1337/url`,
        price: 50
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return an empty object if there are no games', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })

  it('should return the right format when mapped', () => {
    const highlight = {
      title: 'title highlight',
      subtitle: 'subtitle highlight',
      background: {
        url: '/background'
      },
      floatImage: {
        url: '/floatImage'
      },
      buttonLabel: 'buttonLabel',
      buttonLink: 'buttonLink',
      alignment: 'left'
    } as HighlightFragment

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title highlight',
      subtitle: 'subtitle highlight',
      backgroundImage: `http://localhost:1337/background`,
      floatImage: `http://localhost:1337/floatImage`,
      buttonLabel: 'buttonLabel',
      buttonLink: 'buttonLink',
      alignment: 'left'
    })
  })
})

describe('carMapper', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const cart = {
      id: '16',
      name: 'Tomb Raider GOTY',
      price: 3.99,
      cover: {
        url: '/uploads/tomb_raider_goty_41d594f5f3.jpg'
      }
    } as QueryGames_games

    expect(cartMapper([cart])).toStrictEqual([
      {
        id: '16',
        img: `http://localhost:1337/uploads/tomb_raider_goty_41d594f5f3.jpg`,
        price: '€3.99',
        title: 'Tomb Raider GOTY'
      }
    ])
  })
})

describe('ordersMapper', () => {
  const ordersFree = [
    {
      __typename: 'Order',
      id: '5',
      created_at: '2022-02-06T16:04:00.699Z',
      card_brand: null,
      card_last4: null,
      games: [
        {
          id: '8',
          name: 'Neverwinter Nights 2 Complete',
          price: 0,
          cover: {
            url: '/uploads/neverwinter_nights_2_complete_0298bbe9b5.jpg'
          }
        }
      ]
    }
  ] as QueryOrders_orders[]

  const ordersNormal = [
    {
      __typename: 'Order',
      id: '5',
      created_at: '2022-02-06T16:04:00.699Z',
      card_brand: 'visa',
      card_last4: '4242',
      games: [
        {
          id: '8',
          name: 'Neverwinter Nights 2 Complete',
          price: 120,
          cover: {
            url: '/uploads/neverwinter_nights_2_complete_0298bbe9b5.jpg'
          }
        }
      ]
    }
  ] as QueryOrders_orders[]

  it('should return [] if no orders', () => {
    expect(ordersMapper(undefined)).toStrictEqual([])
  })

  it('should render correctly order free after mapper', () => {
    expect(ordersMapper(ordersFree)).toStrictEqual([
      {
        flag: null,
        img: null,
        number: null,
        purchaseDate: 'Feb 6, 2022',
        paymentInfo: [
          {
            id: '8',
            title: 'Neverwinter Nights 2 Complete',
            price: '€0.00',
            img: 'http://localhost:1337/uploads/neverwinter_nights_2_complete_0298bbe9b5.jpg'
          }
        ]
      }
    ])
  })

  it('should render correctly order normal after mapper', () => {
    expect(ordersMapper(ordersNormal)).toStrictEqual([
      {
        flag: 'visa',
        img: '/public/img/card/visa.png',
        number: '**** **** **** 4242',
        purchaseDate: 'Feb 6, 2022',
        paymentInfo: [
          {
            id: '8',
            title: 'Neverwinter Nights 2 Complete',
            price: '€120.00',
            img: 'http://localhost:1337/uploads/neverwinter_nights_2_complete_0298bbe9b5.jpg'
          }
        ]
      }
    ])
  })
})
