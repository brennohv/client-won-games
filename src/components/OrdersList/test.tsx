import { render, screen } from 'utils/test-utils'
import ordersMocks from './mock'

import OrdersList from '.'
// import React from 'react'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock GameItem">{children}</div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the ordersList', () => {
    render(<OrdersList orders={ordersMocks} />)

    expect(
      screen.getByRole('heading', { name: /My orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render Empty', () => {
    render(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
