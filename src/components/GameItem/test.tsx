import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import GameItem from '.'

const props = {
  id: '1',
  title: 'Red Dead Redemption',
  price: '215',
  img: 'https://source.unsplash.com/user/willianjusten/151x70'
}

describe('<GameItem />', () => {
  it('should render the heading', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/215/i)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Red Dead Redemption/i })
    ).toHaveAttribute('src', props.img)
  })

  it('should render the item Download', () => {
    const download = 'http:teste'
    render(<GameItem {...props} linkDownload={download} />)

    expect(
      screen.getByRole('link', { name: /Download Red Dead Redemption here/i })
    ).toHaveAttribute('href', download)
  })

  it('should render remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<GameItem {...props} />, { cartProviderProps })

    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    userEvent.click(removeLink)

    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })

  it('should render the Payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/card/mastercard.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
  })

  it('should do not render img when free game', () => {
    const paymentInfo = {
      flag: null,
      img: null,
      number: 'Free Game',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(/Free game/i)).toBeInTheDocument()
  })

  it('should do not render removeFromCart when passed hideIsInCart ', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true
    }
    const paymentInfo = {
      flag: null,
      img: null,
      number: 'Free Game',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} hideIsInCart />, {
      cartProviderProps
    })

    expect(screen.queryByText(/remove/)).not.toBeInTheDocument()
  })
})
