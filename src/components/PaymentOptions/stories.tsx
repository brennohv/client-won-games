import { Story, Meta } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'
import mockCard from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mockCard
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)
