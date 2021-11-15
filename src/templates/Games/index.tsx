import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import Base from 'templates/Base'

import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }
  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <S.WrapperExplore>
          <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        </S.WrapperExplore>
        <section>
          <Grid>
            {games?.map((game) => (
              <GameCard key={game.img} {...game} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show more</p>
            <KeyboardArrowDown size={40} aria-label="See more" />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
