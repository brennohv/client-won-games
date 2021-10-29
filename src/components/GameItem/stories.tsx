import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

Default.args = {
  title: 'Red Dead Redemption',
  price: '$215,00',
  img: 'https://source.unsplash.com/user/willianjusten/151x70'
}
