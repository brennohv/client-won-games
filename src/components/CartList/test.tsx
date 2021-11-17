import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import props from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <CartList gamesCart={props} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: theme.colors.primary
    })
    expect(screen.getByText('Total:')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button and not render Total', () => {
    renderWithTheme(<CartList gamesCart={props} total="R$ 330,00" hasButton />)

    expect(screen.getByRole('link', { name: 'Buy it now' })).toBeInTheDocument()
    expect(screen.queryByText('Total:')).not.toBeInTheDocument()
  })

  it('should render the Empty', () => {
    renderWithTheme(<CartList />)

    expect(
      screen.getByText(/You do not have games on cart/i)
    ).toBeInTheDocument()
    expect(screen.queryByText('Total:')).not.toBeInTheDocument()
  })
})
