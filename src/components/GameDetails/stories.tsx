import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'game/GameDetails',
  component: GameDetails,
  args: {
    platforms: ['linux', 'mac', 'windows']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'mac', 'windows']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
    <GameDetails {...args} />
  </div>
)
