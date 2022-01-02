import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'

import items from 'components/CartList/mock'

export default {
  title: 'Cart/CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '98%' }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = {
  cartContextValue: {
    items,
    quantity: items.length
  }
}

export const Empty: Story = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '98%' }}>
    <CartDropdown />
  </div>
)
