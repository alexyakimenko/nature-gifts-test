import { Container } from "../layout/Container.styled"
import { History, HistoryWrapper } from "./History.styled"

import data from "./data.json"
import Spinner from "../spinner"
import CardGrid from "../card-grid"

const HistoryComponent = () => {
  return (
    <HistoryWrapper>
      <Container>
        <History>
          <h2>Просмотренные товары</h2>
          <CardGrid data={data} />
          <Spinner />
        </History>
      </Container>
    </HistoryWrapper>
  )
}

export default HistoryComponent