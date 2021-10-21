import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from '.'

describe('<GameDetails />', () => {
  it('should render the heading and icons', () => {
    renderWithTheme(<GameDetails platforms={['linux', 'mac', 'windows']} />)

    expect(
      screen.getByRole('heading', { name: /Company/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/linux/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Windows/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Apple/i)).toBeInTheDocument()
  })
})
