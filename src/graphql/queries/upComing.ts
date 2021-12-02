import { GameFragment } from './../fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'
import { gql } from '@apollo/client'

export const QUERY_UPCOMING = gql`
  query QueryUpComingGames($date: Date!) {
    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }
    showCase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }
  ${HighlightFragment}
  ${GameFragment}
`
