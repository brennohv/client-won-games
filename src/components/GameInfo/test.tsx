import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My title',
  description: 'Game description',
  price: 200
}

describe('<GameInfo />', () => {
  it('should render the game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    // renderizar o heading(title)
    expect(
      screen.getByRole('heading', { name: 'My title' })
    ).toBeInTheDocument()
    // renderizar description
    expect(screen.getByText(props.description)).toBeInTheDocument()
    // renderizar o price
    expect(screen.getByText(/€200.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // renderizar button add to cart
    expect(screen.getByText(/Add to cart/i)).toBeInTheDocument()
    // renderizar button wishlist
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
  })

  it('should render FREE when 0', () => {
    renderWithTheme(<GameInfo {...props} price={0} />)
    expect(screen.getByText(/FREE/)).toBeInTheDocument()
  })
})
