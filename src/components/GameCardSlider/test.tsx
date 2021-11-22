import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gameCards from './mock'
import GameCardSlider from '.'
import theme from 'styles/theme'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(
      <GameCardSlider gameCards={gameCards} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white color arrows by default', () => {
    renderWithTheme(<GameCardSlider gameCards={gameCards} />)

    expect(screen.getByLabelText(/Previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render black color arrows by passed', () => {
    renderWithTheme(<GameCardSlider gameCards={gameCards} color="black" />)

    expect(screen.getByLabelText(/Previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
