import { Story, Meta } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ display: 'flex', width: '98%', justifyContent: 'end' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  userName: 'Brenno'
}
