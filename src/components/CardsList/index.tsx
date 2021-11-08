import Heading from 'components/Heading'
import { CardProps } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: CardProps[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading color="black" size="small" lineBottom>
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <S.Image src={card.img} alt={card.flag} title={card.flag}></S.Image>
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
