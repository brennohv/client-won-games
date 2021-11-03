import styled, { css } from 'styled-components'
import * as RadioStyles from 'components/Radio/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    margin: ${theme.spacings.xsmall} 0;
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};

    ${RadioStyles.Input} {
      border: 0.2rem solid ${theme.colors.black};
    }
  `}
`

export const CardImage = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`

export const NewCreditCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
  `}
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Card = styled.div``

export const CardList = styled.div``
