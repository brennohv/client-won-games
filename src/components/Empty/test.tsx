import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Nenhum resultado encontrado',
  description: 'Infelizmente nao achamos nenhum resultado para sua busca'
}

describe('<Empty />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', { name: /A person playing video game/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Nenhum resultado encontrado/i })
    ).toBeInTheDocument

    expect(
      screen.getByText(
        /Infelizmente nao achamos nenhum resultado para sua busca/i
      )
    ).toBeInTheDocument

    expect(
      screen.getByRole('link', { name: /Go back to store/i })
    ).toHaveAttribute('href', '/')
  })
})
