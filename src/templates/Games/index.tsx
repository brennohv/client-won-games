import { useQueryGames } from 'graphql/queries/games'

import Base from 'templates/Base'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import GameCard from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  // query: retorna a query da path
  // push altera a path
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    //estou alterando a path e query com items recebidos no parametro
    push({
      pathname: '/games',
      query: items
    })
    return
  }
  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <S.WrapperExplore>
          <ExploreSidebar
            initialValues={parseQueryStringToFilter({
              queryString: query,
              filterItems
            })}
            items={filterItems}
            onFilter={handleFilter}
          />
        </S.WrapperExplore>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  slug={game.slug}
                  title={game.name}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <KeyboardArrowDown size={40} aria-label="See more" />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
