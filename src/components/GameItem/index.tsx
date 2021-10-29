import * as S from './styles'

export type GameItemProps = {
  title: string
  price: string
  img: string
}

const GameItem = ({ title, price, img }: GameItemProps) => (
  <S.Wrapper>
    <S.SectionGame>
      <S.ImageBox>
        <S.Image src={img} alt={title} role="img"></S.Image>
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.SectionGame>
  </S.Wrapper>
)

export default GameItem
