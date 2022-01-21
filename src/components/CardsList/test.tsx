import { render, screen } from 'utils/test-utils'

import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards', () => {
    render(<CardsList cards={cardsMock} />)

    // heading my cards
    expect(
      screen.getByRole('heading', { name: /My cards/i })
    ).toBeInTheDocument()

    //tenho que receber um array de cartoes
    expect(screen.getAllByRole('img')).toHaveLength(2)

    // imagem do cartao
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      cardsMock[0].img
    )
    // numero do cartao
    expect(screen.getByText(/4325/i)).toBeInTheDocument()

    // flag do cartao para o alt
    expect(screen.getByAltText(cardsMock[0].flag)).toBeInTheDocument()
  })
})
