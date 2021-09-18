import { RibbonProps, RibbonColors } from './index'
import styled, { css, DefaultTheme } from 'styled-components'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,
  extraLarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    height: 4rem;
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    height: 3.4rem;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    height: 2.4rem;
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ color, theme, size }) => css`
    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
