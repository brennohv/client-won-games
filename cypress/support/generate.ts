import { build, fake } from '@jackfranklin/test-data-bot'

export type Users = {
  username: string
  email: string
  password: string
}

export const CreateUser = build<Users>({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
    email: ''
  },
  postBuild: user => ({
    ...user,
    email: `${user.username.toLowerCase()}e2e@wongames.com`
  })
})
