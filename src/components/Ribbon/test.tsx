import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toBeInTheDocument()
  })

  it('should render with the color primary', () => {
    renderWithTheme(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
  it('should render with the color secondary', () => {
    renderWithTheme(<Ribbon color="secondary">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
  it('should render with size large', () => {
    renderWithTheme(<Ribbon>Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      fontSize: '1.4rem',
      height: '3.4rem'
    })
  })
  it('should render with size extraLarge', () => {
    renderWithTheme(<Ribbon size="extraLarge">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      fontSize: '1.8rem',
      height: '4rem'
    })
  })
  it('should render with size small', () => {
    renderWithTheme(<Ribbon size="small">Bestselling</Ribbon>)

    expect(screen.getByText(/Bestselling/i)).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.4rem'
    })
  })
})
