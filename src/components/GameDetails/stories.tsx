import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import GameMock from './mock'

export default {
  title: 'game/GameDetails',
  component: GameDetails,
  args: GameMock,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'mac', 'windows']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
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
