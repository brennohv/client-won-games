import highlightMock from 'components/Highlight/mock'
import moreGamesMock from 'components/GameCardSlider/mock'
import gamesCartMock from 'components/CartList/mock'

import Cart from '.'
import { render, screen } from 'utils/test-utils'

const props = {
  session: {
    jwt: 'token',
    user: {
      email: 'won@games.com'
    },
    expires: '13234'
  },
  recommendedHighlight: highlightMock,
  recommendedGames: moreGamesMock,
  gamesCart: gamesCartMock,
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
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/PaymentForm', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentForm"></div>
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
    expect(screen.getByTestId('Mock PaymentForm')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /My cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })
})
