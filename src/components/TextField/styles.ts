import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    grid-area: icon;
    & > svg {
      width: 100%;
    }
  `}
`

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'input icon';
    grid-template-columns: 4fr 0.3fr;
  `,
  left: () => css`
    grid-template-areas: 'icon input';
    grid-template-columns: 0.3fr 4fr;
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Input},
    ${Label},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

type IconWrapperProps = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div<IconWrapperProps>`
  ${({ theme, iconPosition }) => css`
    display: grid;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    ${!!iconPosition && wrapperModifiers[iconPosition]}

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconWrapperProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    grid-area: input;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
