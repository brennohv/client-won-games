import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding-right: ${theme.spacings.small};
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.white};
    position: absolute;
    margin-top: ${theme.spacings.small};
    right: 0;

    &::after {
      content: '';
      position: absolute;
      top: -1.1rem;
      right: 2.4rem;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
    }
  `}
`
type WrapperProps = {
  isOpen: boolean
}

const contentModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      transition: transform ${theme.transition.fast},
        opacity ${theme.transition.default};

      ${!!isOpen && contentModifiers.open()}
      ${!isOpen && contentModifiers.close()}
    }
  `}
`
