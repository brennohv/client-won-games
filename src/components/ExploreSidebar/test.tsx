import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'
import ExploreSidebar from '.'
import userEvent from '@testing-library/user-event'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /Price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /System/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument()
  })

  it('should render Checkbox, Radio, Button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByLabelText(/Under \$50/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/High to low/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Windows/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Action/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should handle with initialValues checked', () => {
    renderWithTheme(
      <ExploreSidebar
        onFilter={jest.fn}
        items={items}
        initialValues={{
          windows: true,
          'sort-by': 'high-to-low'
        }}
      />
    )

    expect(screen.getByLabelText(/Windows/i)).toBeChecked()
    expect(screen.getByLabelText(/High to low/i)).toBeChecked()
  })

  it('should return the initialValues ​​when clicking the button', () => {
    const handleFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={items}
        onFilter={handleFilter}
        initialValues={{
          windows: true,
          'sort-by': 'high-to-low'
        }}
      />
    )
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(handleFilter).toBeCalledWith({
      windows: true,
      'sort-by': 'high-to-low'
    })
  })

  it('when clicking on the checkbox and radio must add or remove from values', () => {
    const handleFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={handleFilter} />)

    userEvent.click(screen.getByLabelText(/Windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/High to low/i))
    userEvent.click(screen.getByLabelText(/Low to high/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(handleFilter).toBeCalledWith({
      windows: true,
      linux: true,
      'sort-by': 'low-to-high'
    })
  })
})
