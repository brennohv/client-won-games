import 'match-media-mock'

import highLightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'
import bannerSliderMock from 'components/BannerSlider/mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

const props = {
  banners: bannerSliderMock,
  newGames: gameCardSliderMock,
  mostPopularHighlight: highLightMock,
  mostPopularGames: gameCardSliderMock,
  upComingGames: gameCardSliderMock,
  upComingHighlight: highLightMock,
  upComingMoreGames: gameCardSliderMock,
  freeGames: gameCardSliderMock,
  freeGamesHighlight: highLightMock
}

describe('<Home />', () => {
  it('should render Menu and Footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Contact Us/i })
    ).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Free games/i })
    ).toBeInTheDocument()
  })
})
