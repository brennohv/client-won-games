import 'match-media-mock'

import highLightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'
import bannerSliderMock from 'components/BannerSlider/mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

const props = {
  banners: bannerSliderMock,
  newGames: [gameCardSliderMock[0]],
  newGamesTitle: 'New Games',
  mostPopularHighlight: highLightMock,
  mostPopularGames: [gameCardSliderMock[0]],
  mostPopularGamesTitle: 'Most Popular',
  upComingGames: [gameCardSliderMock[0]],
  upComingHighlight: highLightMock,
  upcomingTitle: 'Upcomming',
  freeGames: [gameCardSliderMock[0]],
  freeGamesHighlight: highLightMock,
  freeGamesTitle: 'Free Games'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner slider"></div>
    }
  }
})
jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render Showcase and BannerSlider', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
    expect(screen.getByTestId('Mock Banner slider')).toBeInTheDocument()
  })
})
