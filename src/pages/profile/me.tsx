import FormProfile, { FormProfileProps } from 'components/FormProfile'
import { QueryProfile } from 'graphql/generated/QueryProfile'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function MePage(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfile>({
    query: QUERY_PROFILE_ME
  })
  console.log(data.me?.username)

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  }
}
