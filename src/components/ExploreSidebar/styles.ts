import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import * as CheckboxStyles from 'components/Checkbox/styles'
import * as RadioStyles from 'components/Radio/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const IconWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: none;
  `}

  svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
`
export const Content = styled.div`
  flex: 1;
  ${media.lessThan('medium')`
    overflow-y: auto;
  `}
`

export const Overlay = styled.div`
  opacity: 0;
  position: absolute;
`

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    & + div {
      padding-top: ${theme.spacings.small};
      margin-top: ${theme.spacings.small};
      border-top: 0.1rem solid ${theme.colors.darkGray};
    }
  `}
`
export const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    box-shadow: 0px -2px 4px rgba(3, 5, 23, 0.1);

    ${media.greaterThan('medium')`
      display: none
    `}
  `}
`

export const wrapperModifier = {
  open: (theme: DefaultTheme) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: ${theme.layers.modal};
    display: flex;
    flex-direction: column;

    ${IconWrapper} {
      svg {
        color: ${theme.colors.black};
        position: absolute;
        width: 3rem;
        right: 0.8rem;
        top: 0.8rem;

        &:first-child {
          display: none;
        }
      }
    }

    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }

    ${HeadingStyles.Wrapper}, ${RadioStyles.Label}, ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }

    ${Content} {
      overflow-y: scroll;
      margin-top: 5.6rem;
      margin-bottom: 2rem;
      padding: 0 ${theme.spacings.small};
    }

    ${Overlay} {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: ${theme.colors.white};
      z-index: ${theme.layers.modal};
      opacity: 1;
    }
  `,
  close: (theme: DefaultTheme) => css`
    ${IconWrapper} {
      svg {
        color: ${theme.colors.white};

        &:last-child {
          display: none;
        }
      }
    }

    ${Content} ,${Footer} {
      height: 0;
      visibility: hidden;
      position: absolute;
      left: 0;
    }
  `
}

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isOpen }) => css`
    ${media.lessThan('medium')`
      ${!isOpen && wrapperModifier.close(theme)}
      ${!!isOpen && wrapperModifier.open(theme)}
    `}
  `}
`
