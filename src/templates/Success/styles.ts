import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0 ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxlarge} 0 ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    text-align: center;

    ${media.lessThan('medium')`
      font-size: calc(${theme.font.sizes.xsmall} * 2);
    `}
  `}
`
export const WrapperDone = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
    text-align: center;

    & svg {
      background-color: ${theme.colors.primary};
      border-radius: 50%;
      color: ${theme.colors.white};
      width: 9rem;
      box-shadow: 0 0 2rem ${theme.colors.primary};
      padding: 0.5rem;
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    margin: auto;
    max-width: 50rem;

    ${media.lessThan('medium')`
      color: #B5B5B5;
    `}

    & a {
      text-decoration: none;
      color: ${theme.colors.primary};
      text-align: center;
    }
  `}
`
