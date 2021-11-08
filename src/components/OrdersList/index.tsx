import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  orders?: GameItemProps[]
}

const OrdersList = ({ orders }: OrdersListProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom color="black">
      My orders
    </Heading>

    {orders?.length ? (
      orders.map((order) => <GameItem key={order.title} {...order}></GameItem>)
    ) : (
      <Empty title="No Orders" hasLink description="make your first purchase" />
    )}
  </S.Wrapper>
)

export default OrdersList
