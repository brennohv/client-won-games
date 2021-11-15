import Games, { GamesTemplateProps } from 'templates/Games'

import GamesMock from 'components/GameCardSlider/mock'
import ExploreMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      games: GamesMock,
      filterItems: ExploreMock
    }
  }
}
