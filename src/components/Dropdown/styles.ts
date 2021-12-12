import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding-right: ${theme.spacings.xxsmall};
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    z-index: ${theme.layers.alwaysOnTop};
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
    z-index: ${theme.layers.alwaysOnTop};

    &::after {
      content: '';
      position: absolute;
      top: -1.1rem;
      right: 0.9rem;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: ${theme.layers.overlay};
    background: rgba(0, 0, 0, 0.5);
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

    ${Content},
    ${Overlay} {
      transition: transform ${theme.transition.fast},
        opacity ${theme.transition.default};

      ${!!isOpen && contentModifiers.open()}
      ${!isOpen && contentModifiers.close()}
    }
  `}
`
