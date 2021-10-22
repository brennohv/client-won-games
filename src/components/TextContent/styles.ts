import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      background: ${theme.colors.white};
      padding: ${theme.spacings.xlarge};
      color: ${theme.colors.black}
    `}

    h1, h2, h3, h4, h5, h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacings.xsmall} 0;
      ${HeadingStyles.modifierWrapper.lineLeft(theme, 'secondary')};

      ${media.greaterThan('medium')`
        color: ${theme.colors.black};
      `}
    }
    a {
      color: ${theme.colors.primary};
    }

    img {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      margin: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
