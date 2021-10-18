import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import { Container } from 'components/Container'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper},
    ${HighlightStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-left: calc(-${theme.grid.gutter} / 2);
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
