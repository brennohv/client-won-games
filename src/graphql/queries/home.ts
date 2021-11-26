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
  }

  ${BannerFragment}
  ${GameFragment}
`
