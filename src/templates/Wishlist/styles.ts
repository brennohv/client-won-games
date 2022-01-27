import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.large} * 2);
    margin-bottom: calc(${theme.spacings.medium} * 2);
  `}
`
export const AnimationLoading = styled.img`
  width: 4rem;
  height: 1.5rem;
`
export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rem;
  svg {
    height: 10rem;
    width: 10rem;
  }
`
