import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

export default async function protectedRoutes(
  context: GetServerSidePropsContext
) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      Location: `/sign-in?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return session
}

// caso nao tenha uma sessao vou 302(codigo para redirecionar) para o o sign-in
// com uma query callbackUrl da pagina que estava tentando acessar
// tenho acesso a essa query com useRouter
// resolvedUrl: uma versão normalizada da solicitação URL
// que remove o _next/dataprefixo das transições do cliente e inclui valores de consulta originais.
// resumindo ignora o localhost..... e pega a pagina que esta tentando acessar
