import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    height: 5rem;
    background-color: ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`
