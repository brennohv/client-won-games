import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
      padding-top: calc(${theme.spacings.large} * 3);
    `}
  `}
`