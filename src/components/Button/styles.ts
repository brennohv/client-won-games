import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidht' | 'minimal'>

const wapperModifiers = {
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
  `,
  fullWidht: () => css`
    width: 100%;
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidht, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      180deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && wapperModifiers[size](theme)}
    ${!!fullWidht && wapperModifiers.fullWidht()}
    ${!!hasIcon && wapperModifiers.withIcon(theme)}
    ${!!minimal && wapperModifiers.minimal(theme)}
    ${disabled && wapperModifiers.disabled()}
  `}
`
