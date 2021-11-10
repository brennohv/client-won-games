import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import items from './mock'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('heading', { name: /Price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /System/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument()
  })

  it('should render Checkbox, Radios and Button', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /Under \$100/ })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('checkbox', { name: /Windows/ })
    ).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /Action/ })).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /High to low/ })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Filtrar/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{
          windows: true,
          'under-$100': true,
          'high-to-low': true
        }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /Windows/ })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: /Under \$100/ })).toBeChecked()
    expect(screen.getByRole('radio', { name: /High to low/ })).toBeChecked()
  })
})
