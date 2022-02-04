import { Container } from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'
import { Done } from '@styled-icons/material-outlined/Done'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import Link from 'next/link'

export type SuccessProps = {
  heading: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  heading,
  recommendedHighlight,
  recommendedGames
}: SuccessProps) => {
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Title>Your purchase was successful</S.Title>

          <S.WrapperDone>
            <Done />
          </S.WrapperDone>

          <S.Text>
            Wait for your details by email. Your game is now avaible for
            download here{' '}
            <Link href="/profile/orders">
              <a>Orders List </a>
            </Link>
            . Enjoy
          </S.Text>
        </S.Wrapper>
        <Divider />
      </Container>

      <Showcase
        heading={heading}
        gameCardSlider={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
