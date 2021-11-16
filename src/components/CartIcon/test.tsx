import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the shoppingCart Icon and not render Badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.queryByLabelText(/Quantity/i)).not.toBeInTheDocument()
  })

  it('should render the Badge', () => {
    renderWithTheme(<CartIcon quantity={12} />)

    expect(screen.getByLabelText(/Quantity/i)).toBeInTheDocument()
    expect(screen.getByText(/12/)).toBeInTheDocument()
  })

  it('should not render when < 0', () => {
    renderWithTheme(<CartIcon quantity={0} />)

    expect(screen.queryByLabelText(/Quantity/i)).not.toBeInTheDocument()
  })
})
