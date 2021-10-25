// import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild).toHaveStyle({
      maxWidth: theme.grid.container
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: calc(3.2rem / 2);
  padding-left: calc(3.2rem / 2);
}

<div
  class="c0"
/>
`)
  })
})
