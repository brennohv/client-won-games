import 'match-media-mock'

import { render, screen } from 'utils/test-utils'
import highLightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'

import Showcase from '.'

const props = {
  heading: 'ola',
  highlight: highLightMock,
  gameCardSlider: gameCardSliderMock
}

describe('<Showcase />', () => {
  it('should render the heading on the Showcase', () => {
    render(<Showcase heading={props.heading} />)

    expect(screen.getByRole('heading', { name: /Ola/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /Buy now/i })
    ).not.toBeInTheDocument()

    expect(screen.queryByLabelText(/Previous games/i)).not.toBeInTheDocument()
  })

  it('should render without title', () => {
    render(
      <Showcase
        highlight={props.highlight}
        gameCardSlider={props.gameCardSlider}
      />
    )

    expect(
      screen.queryByRole('heading', { name: 'Ola' })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Read Dead it’s back' })
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', { name: 'Population Zero' })
    ).toHaveLength(4)
  })
})
