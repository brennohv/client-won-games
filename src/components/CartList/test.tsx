import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'

const props = {
  gamesCart: [
    {
      img: 'https://source.unsplash.com/user/willianjusten/151x70',
      title: 'Red Dead Redemption 2',
      price: 'R$ 215,00'
    },
    {
      img: 'https://source.unsplash.com/user/willianjusten/151x70',
      title: 'Borderlands 3',
      price: 'R$ 215,00'
    }
  ],
  total: 'R$ 330,00'
}

describe('<CartList />', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(<CartList {...props} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: theme.colors.primary
    })
    expect(screen.getByText('Total:')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
