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
import Empty from 'components/Empty'
import { getImageUrl } from 'utils/getImageUrl'
import { useHandleScroll } from 'hooks/handleScroll'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  // query: retorna a query da path
  // push altera a path
  const { push, query } = useRouter()
  const { isOpen } = useHandleScroll()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true, // toda vez que chamar o fetchMore vai avisar o loading
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>Loading...</p>

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

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
    <S.Wrapper whenFilterIsOpen={isOpen}>
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

          <section>
            {data?.games.length ? (
              <>
                <Grid>
                  {data?.games.map((game) => (
                    <GameCard
                      id={game.id}
                      key={game.id}
                      slug={game.slug}
                      title={game.name}
                      developer={game.developers[0].name}
                      img={`${getImageUrl(game.cover!.url)}`}
                      price={game.price}
                    />
                  ))}
                </Grid>

                {hasMoreGames && (
                  <S.ShowMore>
                    {loading ? (
                      <S.ShowMoreLoading src="/img/dots.svg" alt="Loading" />
                    ) : (
                      <S.ShorMoreButton role="button" onClick={handleShowMore}>
                        <p>Show more</p>
                        <KeyboardArrowDown size={40} aria-label="See more" />
                      </S.ShorMoreButton>
                    )}
                  </S.ShowMore>
                )}
              </>
            ) : (
              <Empty title="=)" description="we didn't find any game" />
            )}
          </section>
        </S.Main>
      </Base>
    </S.Wrapper>
  )
}

export default GamesTemplate
