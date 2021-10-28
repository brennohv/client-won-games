import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.hr`
  ${({ theme }) => css`
    height: 0.1rem;
    background: rgba(181, 181, 181, 0.3);
    border: 0;
    margin: ${theme.spacings.xlarge} auto ${theme.spacings.xxlarge};

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xxlarge} * 2) auto calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`
