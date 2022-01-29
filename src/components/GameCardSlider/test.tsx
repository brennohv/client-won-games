import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import gameCards from './mock'
import GameCardSlider from '.'
import theme from 'styles/theme'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'brennovicentini@gmail.com' } }
useSession.mockImplementation(() => [session])

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider gameCards={gameCards} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white color arrows by default', () => {
    render(<GameCardSlider gameCards={gameCards} />)

    expect(screen.getByLabelText(/Previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render black color arrows by passed', () => {
    render(<GameCardSlider gameCards={gameCards} color="black" />)

    expect(screen.getByLabelText(/Previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
