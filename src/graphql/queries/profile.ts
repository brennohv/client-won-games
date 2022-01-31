import { gql } from '@apollo/client'

export const QUERY_PROFILE_ME = gql`
  query QueryProfile($identifier: ID!) {
    user(id: $identifier) {
      id
      username
      email
    }
  }
`
