import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  position: relative;

  ${media.lessThan('medium')`
    ${RibbonStyles.Wrapper} {
      right: 0;
      &::before {
        display: none;
      }
    }
  `}

  ${media.greaterThan('medium')`
  box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    background: ${theme.colors.lightGray};
    position: relative;

    ${media.greaterThan('medium')`
      height: 58rem
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    /* height: 14rem; */
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
    height: 22rem;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: ${theme.border.radius} ;
    padding: ${theme.spacings.medium} ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xlarge}
    `}

    strong {
      color: ${theme.colors.primary};
    }
  `}
`
