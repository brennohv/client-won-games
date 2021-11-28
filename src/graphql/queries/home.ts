import { HighlightFragment } from './../fragments/highlight'
import { BannerFragment } from './../fragments/banner'
import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-11-25" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: "2021-11-25" }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:asc", limit: 8) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...Highlight
        }
      }
      popularGames {
        title
        highlight {
          ...Highlight
        }
        games {
          ...GameFragment
        }
      }
      upcomingGames {
        title
        highlight {
          ...Highlight
        }
      }

      freeGames {
        title
        highlight {
          ...Highlight
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
