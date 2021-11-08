import { Story, Meta } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'

import ordersMocks from './mock'

export default {
  title: 'profile/OrdersList',
  component: OrdersList,
  args: {
    orders: ordersMocks
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <OrdersList {...args} />
)
