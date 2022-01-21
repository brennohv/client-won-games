import highlightMock from 'components/Highlight/mock'
import moreGamesMock from 'components/GameCardSlider/mock'
import gamesCartMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart from '.'
import { render, screen } from 'utils/test-utils'

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: moreGamesMock,
  gamesCart: gamesCartMock,
  title: 'You may like these games',
  total: '$430,00',
  cards: cardsMock
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
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions"></div>
    }
  }
})

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CartList"></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<Cart />', () => {
  it('should render the sections', () => {
    render(<Cart {...props} />)

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /My cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })
})
