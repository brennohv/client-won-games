import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    position: relative;
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    height: 1.6rem;
    width: 1.6rem;
  `}
`
