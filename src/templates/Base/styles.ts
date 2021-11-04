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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    margin-top: ${theme.spacings.xlarge};
  `}
`
