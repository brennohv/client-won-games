import { Story, Meta } from '@storybook/react'
import CardsList, { CardsListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
