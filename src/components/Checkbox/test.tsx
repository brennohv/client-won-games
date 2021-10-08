import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    // input a partir do papel role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should not render label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render with white label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="white" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
