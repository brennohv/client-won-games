import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { ordersMapper } from 'utils/mappers'

export default function OrdersPage({ orders }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList orders={orders} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const client = initializeApollo(null, session)
  const { data } = await client.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string
    }
  })

  return {
    props: {
      orders: ordersMapper(data.orders),
      session
    }
  }
}
