import { Story, Meta } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'
import mockCard from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    cards: mockCard
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ width: '39rem' }}>
    <PaymentOptions {...args} />
  </div>
)
