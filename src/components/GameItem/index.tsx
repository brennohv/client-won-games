import * as S from './styles'
import { Download } from '@styled-icons/boxicons-solid/Download'
import { useCart } from 'hooks/use-cart'

export type PaymentProps = {
  flag: string | null
  number: string
  purchaseDate: string
  img: string | null
}

export type GameItemProps = {
  id: string
  title: string
  price: string
  img: string
  linkDownload?: string
  paymentInfo?: PaymentProps
  hideIsInCart?: boolean
  // hideIsInCart faz com que eu possa utilizar esse componente em orderList
  // sem que aparaça o removeFromCart
}

const GameItem = ({
  id,
  title,
  price,
  img,
  linkDownload,
  paymentInfo,
  hideIsInCart
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()
  return (
    <S.Wrapper>
      <S.SectionGame>
        <S.ImageBox>
          <S.Image src={img} alt={title} role="img"></S.Image>
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!linkDownload && (
              <S.DownloadLink
                href={linkDownload}
                target={'_blank'}
                aria-label={`Download ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {!hideIsInCart && isInCart(id) && (
              <S.RemoveFromCart
                role="button"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </S.RemoveFromCart>
            )}
          </S.Group>
        </S.Content>
      </S.SectionGame>

      {!!paymentInfo && (
        <S.SectionPayment>
          <p>{paymentInfo?.purchaseDate}</p>
          <S.CardInfo>
            <S.PurchaseDate>{paymentInfo?.number}</S.PurchaseDate>
            {!!paymentInfo.img && !!paymentInfo.flag && (
              <S.CardImage
                src={paymentInfo?.img}
                alt={paymentInfo?.flag}
              ></S.CardImage>
            )}
          </S.CardInfo>
        </S.SectionPayment>
      )}
    </S.Wrapper>
  )
}

export default GameItem
