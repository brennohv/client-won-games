import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment Highlight on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
