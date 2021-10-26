import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfoMock from 'components/GameInfo/mock'
import GalleryMock from 'components/Gallery/mock'
import TextContentMock from 'components/TextContent/mock'
import GameDetailsMock from 'components/GameDetails/mock'
import HighlightMock from 'components/Highlight/mock'
import GameCardSliderMock from 'components/GameCardSlider/mock'

import { GameDetailsProps } from 'components/GameDetails/index'

import Game, { GameTemplateProps } from '.'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: GameInfoMock,
  gallery: GalleryMock,
  description: TextContentMock.content,
  gameDetails: GameDetailsMock as GameDetailsProps,
  upComingHighligth: HighlightMock,
  upComingGames: GameCardSliderMock,
  gameSuggestion: GameCardSliderMock
}

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
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

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.queryByTestId('Mock Gallery')?.parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toBeInTheDocument()
    expect(cover).toHaveStyle({
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70.9rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(100% 0%,100% 100%,0% 85%,0% 0%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})