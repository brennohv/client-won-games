import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'CD PROJEKT RED',
  platforms: ['linux', 'mac', 'windows'],
  publisher: 'Walktrough',
  releaseDate: '2020-11-21T23:00:00',
  rating: 'FREE',
  genres: ['Action', 'Adventure']
}

describe('<GameDetails />', () => {
  it('should render the heading and icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/linux/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Windows/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Apple/i)).toBeInTheDocument()
  })

  it('should render Date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Nov 21, 2020/i)).toBeInTheDocument()
  })

  it('should render format rating', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Walktrough/i)).toBeInTheDocument()
  })

  it('should render format genre ', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Action / Adventure')).toBeInTheDocument()
  })
})
