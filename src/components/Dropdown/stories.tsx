import { Story, Meta } from '@storybook/react'

import { DropdownProps } from './index'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />

Default.args = {
  title: 'Click here',
  children: 'Content'
}
