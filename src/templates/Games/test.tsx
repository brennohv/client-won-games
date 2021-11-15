import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GamesMock from 'components/GameCardSlider/mock'
import ExploreMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('components/GameCard', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock GameCard">{children}</div>
    }
  }
})

jest.mock('components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock ExploreSidebar">{children}</div>
    }
  }
})

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(<Games games={GamesMock} filterItems={ExploreMock} />)

    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(6)
    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Show more/ })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('See more')).toBeInTheDocument()
  })
})
