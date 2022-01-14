import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'
import Button from 'components/Button'

export type FormProfileProps = {
  email?: string
  username?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => {
  return (
    <>
      <Heading size="small" lineBottom lineColor="primary" color="black">
        My profile
      </Heading>
      <S.Form>
        <TextField
          label="Username"
          name="username"
          initialValue={username}
          placeholder="Username"
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={email}
          disabled
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="Type your password"
        />

        <TextField
          label="New password"
          name="new_password"
          type="password"
          placeholder="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </>
  )
}

export default FormProfile
