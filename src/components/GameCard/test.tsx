import 'next-image-mock'
import { render, screen } from 'utils/test-utils'

import GameCard from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'brennovicentini@gmail.com' } }
useSession.mockImplementation(() => [session])

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      '/game/population-zero'
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    render(<GameCard {...props} />)
    // preço não tenha line-through
    expect(screen.queryByText(/€235.00/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    // preço tenha o background secundário
    expect(screen.getByText(/€235.00/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render FREE when 0', () => {
    render(<GameCard {...props} price={0} />)

    expect(screen.queryByText(/FREE/i)).toBeInTheDocument()
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    render(<GameCard {...props} promotionalPrice={15} />)
    // preço tenha line-through (230)
    expect(screen.getByText('€235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    // preço novo promocional não vai ter line-through (15)
    expect(screen.queryByText('€15.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/20% OFF/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      height: '2.4rem',
      fontSize: '1.2rem'
    })
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })
})
