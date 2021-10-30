import * as S from './styles'
import { Download } from '@styled-icons/boxicons-solid/Download'

export type GameItemProps = {
  title: string
  price: string
  img: string
  linkDownload?: string
}

const GameItem = ({ title, price, img, linkDownload }: GameItemProps) => (
  <S.Wrapper>
    <S.SectionGame>
      <S.ImageBox>
        <S.Image src={img} alt={title} role="img"></S.Image>
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!linkDownload && (
            <S.Download
              href={linkDownload}
              target={'_blank'}
              aria-label={`Download ${title} here`}
            >
              <Download size={22} />
            </S.Download>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.SectionGame>
  </S.Wrapper>
)

export default GameItem
