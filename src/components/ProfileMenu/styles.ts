import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`
type LinkProps = {
  isActive?: boolean
}

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  `,
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  `
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};

    span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}
  `}
`
