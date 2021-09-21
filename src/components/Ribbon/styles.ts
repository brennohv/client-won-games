import { darken } from 'polished'
import { RibbonProps, RibbonColors } from './index'
import styled, { css, DefaultTheme } from 'styled-components'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-top-color: ${darken(0.2, theme.colors[color])};
      border-left-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  extraLarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    height: 4rem;
    right: -2.2rem;

    &::before {
      top: 4rem;
      border-right-width: 2.2rem;
      border-top-width: 1rem;
    }
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    height: 3.4rem;
    right: -1.4rem;

    &::before {
      top: 3.4rem;
      border-right-width: 1.4rem;
      border-top-width: 0.8rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    height: 2.4rem;
    right: -1.3rem;

    &::before {
      top: 2.4rem;
      border-right-width: 1.3rem;
      border-top-width: 0.6rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ color, theme, size }) => css`
    position: absolute;
    right: 0;
    top: ${theme.spacings.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    display: flex;
    align-items: center;

    &::before {
      position: absolute;
      content: '';
      border-style: solid;
      right: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-width: 0rem;
    }
    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
