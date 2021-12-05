import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'
import ExploreSidebar from '.'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /Price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()
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
          platforms: ['windows'],
          sort_by: 'high-to-low'
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
          platforms: ['windows'],
          sort_by: 'high-to-low'
        }}
      />
    )
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(handleFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'high-to-low'
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
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={items} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
