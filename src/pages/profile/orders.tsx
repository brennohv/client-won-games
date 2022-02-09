import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'
import ordersMock from 'components/OrdersList/mock'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'

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

  console.log(
    data.orders.map((order) => {
      order.games
    })
  )

  return {
    props: {
      orders: ordersMock,
      session
    }
  }
}
