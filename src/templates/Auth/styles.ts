import styled, { css } from 'styled-components'

import * as LogoProps from 'components/Logo/styles'
import * as HeadingProps from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  ${media.lessThan('medium')`
      grid-template-columns: 1fr
    `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}

    &::after {
      content: '';
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxlarge};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`
export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    justify-content: space-between;
    position: relative;
    z-index: ${theme.layers.base};
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    align-self: end;
    text-align: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoProps.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingProps.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
