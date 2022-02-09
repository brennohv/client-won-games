import formatPrice from 'utils/format-price'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { QueryWishlists_wishlists_games } from 'graphql/generated/QueryWishlists'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(!!banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonSize: banner.ribbon.size,
      ribbonColor: banner.ribbon.color
    })
  }))
}

export const gamesMapper = (games: QueryGames_games[] | undefined | null) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: HighlightFragment | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background?.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games?.map((game) => ({
        id: game.id,
        img: `http://localhost:1337${game.cover?.url}`,
        price: formatPrice(game.price),
        title: game.name
      }))
    : []
}

export const wishlistMapper = (
  games: QueryWishlists_wishlists_games[] | undefined
) => {
  return games
    ? games?.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => ({
        flag: order.card_brand ? order.card_brand : null,
        img: order.card_brand
          ? `/public/img/card/${order.card_brand}.png`
          : null,
        number: order.card_last4 ? `**** **** **** ${order.card_last4}` : null,
        purchaseDate: new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(new Date(order.created_at)),
        paymentInfo: order.games.map((game) => ({
          id: game.id,
          title: game.name,
          price: formatPrice(game.price),
          img: `${process.env.NEXT_PUBLIC_API_URL}${game.cover?.url}`
        }))
      }))
    : []
}
