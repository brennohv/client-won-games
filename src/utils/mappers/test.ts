import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper, cartMapper } from '.'

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
