import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    outline: none;

    &::before {
      content: '';
      position: absolute;
      height: 0.8rem;
      width: 0.6rem;
      top: 0.1rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      opacity: 0;
      transform: rotate(45deg);
      transition: opacity 0.2s ease-in-out;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`
