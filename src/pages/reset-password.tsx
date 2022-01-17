import Auth from 'templates/Auth'
import FormResetPassword from 'components/FormResetPassword'

export default function SignIn() {
  return (
    <Auth title="Reset your password">
      <FormResetPassword />
    </Auth>
  )
}
