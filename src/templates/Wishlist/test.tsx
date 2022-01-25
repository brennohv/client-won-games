import { render, screen } from 'utils/test-utils'
import highlightMock from 'components/Highlight/mock'
import gameCardMock from 'components/GameCardSlider/mock'

import Wishlist from '.'

const props = {
  recomendedGames: gameCardMock,
  recomendedHighlight: highlightMock,
  games: gameCardMock,
  title: 'You may like these games'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

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
    render(<Wishlist {...props} />)

    expect(screen.getByTestId('Mock Showcase mock')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()
  })

  it('should render when there are not games', () => {
    render(
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
