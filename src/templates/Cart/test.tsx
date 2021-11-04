import { screen } from '@testing-library/react'
import highlightMock from 'components/Highlight/mock'
import moreGamesMock from 'components/GameCardSlider/mock'
import gamesCartMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: moreGamesMock,
  gamesCart: gamesCartMock,
  total: '$430,00',
  cards: cardsMock
}

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

describe('<Cart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Cart {...props} />)

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /My cart/i })
    ).toBeInTheDocument()
  })
})
