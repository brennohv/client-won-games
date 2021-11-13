import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  },
  argTypes: {
    onFilter: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    },
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

WithInitialValues.args = {
  initialValues: {
    windows: true,
    'sort-by': 'high-to-low'
  }
}
