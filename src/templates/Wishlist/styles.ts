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
export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
`
