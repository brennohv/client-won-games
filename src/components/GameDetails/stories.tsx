import { Story, Meta } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
    <GameDetails />
  </div>
)
