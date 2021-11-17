import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesCart from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render the <CartIcon />', () => {
    renderWithTheme(<CartDropdown gamesCart={gamesCart} total="R$ 330,00" />)

    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.getByText(`${gamesCart.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown with cart items and total />', () => {
    renderWithTheme(<CartDropdown gamesCart={gamesCart} total="R$ 330,00" />)

    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(screen.getByText(`${gamesCart[0].title}`)).toBeInTheDocument()
  })
})
