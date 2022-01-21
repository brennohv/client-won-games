import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white Heading by default', () => {
    render(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a white Heading', () => {
    render(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a Heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a Heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a small size ', () => {
    render(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a Heading with a small size ', () => {
    render(<Heading size="huge">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
