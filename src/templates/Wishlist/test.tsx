import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightMock from 'components/Highlight/mock'
import gameCardMock from 'components/GameCardSlider/mock'

import Wishlist from '.'

const props = {
  recomendedGames: gameCardMock,
  recomendedHighlight: highlightMock,
  games: gameCardMock,
  title: 'You may like these games'
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase mock"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByTestId('Mock Showcase mock')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(6)
  })

  it('should render when there are not games', () => {
    renderWithTheme(
      <Wishlist
        recomendedGames={gameCardMock}
        recomendedHighlight={highlightMock}
        title="You may like these games"
      />
    )

    expect(screen.queryByText(/Population Zero/)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Nenhum resultado encontrado/i })
    ).toBeInTheDocument()
  })
})
