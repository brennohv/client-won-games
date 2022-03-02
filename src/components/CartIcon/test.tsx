import { screen, render } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the shoppingCart Icon and not render Badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the Badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 }
    })

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})
