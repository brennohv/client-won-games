import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

type OrderProps = {
  id: string
  paymentInfo: PaymentProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  orders?: OrderProps[]
}

const OrdersList = ({ orders }: OrdersListProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom color="black">
      My orders
    </Heading>

    {orders?.length ? (
      orders.map((order) => {
        return order.games.map((game) => (
          <GameItem
            hideIsInCart
            key={`${order.id} ${game.id}`}
            paymentInfo={order.paymentInfo}
            {...game}
          ></GameItem>
        ))
      })
    ) : (
      <Empty title="No Orders" hasLink description="make your first purchase" />
    )}
  </S.Wrapper>
)

export default OrdersList

/*
      type GameItemProps = {
    id: string;
    title: string;
    price: string;
    img: string;
    linkDownload?: string | undefined;
    paymentInfo?: PaymentProps | undefined;


    type PaymentProps = {
  flag: string
  number: string
  purchaseDate: string
  img: string
}
}
*/
