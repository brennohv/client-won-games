import Link from 'next/link'
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
        <S.ButtonContainer>
          <Link href={`/forgot-password?email=${email}`} passHref>
            <Button minimal size="medium" as="a">
              Reset your password
            </Button>
          </Link>
          <Button size="large">Save</Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  )
}

export default FormProfile
