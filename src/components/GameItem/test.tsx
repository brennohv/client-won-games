import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  title: 'Red Dead Redemption',
  price: '215',
  img: 'https://source.unsplash.com/user/willianjusten/151x70'
}

describe('<GameItem />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/215/i)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Red Dead Redemption/i })
    ).toHaveAttribute('src', props.img)
  })

  it('should render the item Download', () => {
    const download = 'http:teste'
    renderWithTheme(<GameItem {...props} linkDownload={download} />)

    expect(
      screen.getByRole('link', { name: /Download Red Dead Redemption here/i })
    ).toHaveAttribute('href', download)
  })
})
