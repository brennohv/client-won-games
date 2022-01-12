import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'
import ordersMock from 'components/OrdersList/mock'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function OrdersPage({ orders }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList orders={orders} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      orders: ordersMock,
      session
    }
  }
}
