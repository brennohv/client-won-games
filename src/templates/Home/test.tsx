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
  mostPopularHighlight: highLightMock,
  mostPopularGames: [gameCardSliderMock[0]],
  upComingGames: [gameCardSliderMock[0]],
  upComingHighlight: highLightMock,
  upComingMoreGames: [gameCardSliderMock[0]],
  freeGames: [gameCardSliderMock[0]],
  freeGamesHighlight: highLightMock
}

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

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    expect(screen.getByTestId('Mock Banner slider')).toBeInTheDocument()
  })
})
