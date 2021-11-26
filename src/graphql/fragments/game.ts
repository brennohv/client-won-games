import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    price
    cover {
      url
    }
    developers {
      name
    }
  }
`
