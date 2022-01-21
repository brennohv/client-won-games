import { fireEvent } from '@testing-library/react'
import { render, screen } from 'utils/test-utils'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    render(<Checkbox label="checkbox label" labelFor="check" />)

    // input a partir do papel role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should not render label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render with white label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="white" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should dispatch onCheck when status changes ', () => {
    const onCheck = jest.fn()
    render(<Checkbox label="checkbox label" onCheck={onCheck} />)

    fireEvent.click(screen.getByRole('checkbox'))

    expect(onCheck).toBeCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should ', () => {
    const onCheck = jest.fn()
    render(<Checkbox label="checkbox label" onCheck={onCheck} isChecked />)
    fireEvent.click(screen.getByRole('checkbox'))

    expect(onCheck).toBeCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
