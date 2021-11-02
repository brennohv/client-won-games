import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'
import gameCart from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    gamesCart: gameCart,
    total: '330,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => <CartList {...args} />
