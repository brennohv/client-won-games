import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  platforms: ['linux', 'mac', 'windows'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'FREE',
  genre: ['Action', 'Adventure']
}

describe('<GameDetails />', () => {
  it('should render the heading and icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Company/i })
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
    renderWithTheme(<GameDetails {...props} rating="FREE" />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render format genre ', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Action / Adventure')).toBeInTheDocument()
  })
})
