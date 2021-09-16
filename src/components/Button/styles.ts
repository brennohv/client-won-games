import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidht'>

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
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  fullWidht: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidht, hasIcon }) => css`
    background: linear-gradient(
      180deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
        linear-gradient(
          178.59deg,
          #ff5f5f -14.51%,
          #f062c0 102.86%,
          #f23131 102.86%
        );
    }

    ${!!size && wapperModifiers[size](theme)}
    ${!!fullWidht && wapperModifiers.fullWidht()}
    ${!!hasIcon && wapperModifiers.withIcon(theme)}
  `}
`
