import { render, screen } from 'utils/test-utils'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    render(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toBeInTheDocument()
  })

  it('should render with the color primary', () => {
    render(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
  it('should render with the color secondary', () => {
    render(<Ribbon color="secondary">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
  it('should render with size large', () => {
    render(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      fontSize: '1.4rem',
      height: '3.4rem'
    })
  })
  it('should render with size extraLarge', () => {
    render(<Ribbon size="extraLarge">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      fontSize: '1.8rem',
      height: '4rem'
    })
  })
  it('should render with size small', () => {
    render(<Ribbon size="small">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.4rem'
    })
  })
})
