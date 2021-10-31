import * as S from './styles'
import { Download } from '@styled-icons/boxicons-solid/Download'

export type PaymentProps = {
  flag: string
  number: string
  purchaseDate: string
  img: string
}

export type GameItemProps = {
  title: string
  price: string
  img: string
  linkDownload?: string
  paymentInfo?: PaymentProps
}

const GameItem = ({
  title,
  price,
  img,
  linkDownload,
  paymentInfo
}: GameItemProps) => (
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
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.SectionGame>

    <S.SectionPayment>
      {!!paymentInfo && <p>{paymentInfo?.purchaseDate}</p>}
      <S.CardInfo>
        <S.PurchaseDate>{paymentInfo?.number}</S.PurchaseDate>
        <S.CardImage
          src={paymentInfo?.img}
          alt={paymentInfo?.flag}
        ></S.CardImage>
      </S.CardInfo>
    </S.SectionPayment>
  </S.Wrapper>
)

export default GameItem
