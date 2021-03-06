import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks/use-cart'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    id: '1',
    title: 'Red Dead Redemption',
    price: '$215,00',
    img: 'https://source.unsplash.com/user/willianjusten/151x70'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithDownload: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

export const IsInCart: Story<GameItemProps & CartContextData> = (args) => (
  <GameItem {...args} />
)

WithDownload.args = {
  linkDownload: 'http:teste',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}

IsInCart.args = {
  isInCart: () => true
}
