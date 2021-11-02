import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import paymentMock from './mock'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <PaymentOptions cards={paymentMock} handlePayment={jest.fn} />
    )
    expect(
      screen.getByRole('heading', { name: /Payment/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('radio')).toHaveLength(2)
    expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Add cart')).toBeInTheDocument()
  })
})
