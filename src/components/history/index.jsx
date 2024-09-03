import { Container } from "../layout/Container.styled"
import { History, HistoryWrapper, Content } from "./History.styled"
import ItemCard from "./item-card"

import data from "./data.json"
import Spinner from "../spinner"

const HistoryComponent = () => {
  return (
    <HistoryWrapper>
      <Container>
        <History>
          <h2>Просмотренные товары</h2>
          <Content>
            {
              data.map(item => (
                <ItemCard key={item.id} data={item}/>
              ))
            }
          </Content>
          <Spinner />
        </History>
      </Container>
    </HistoryWrapper>
  )
}

export default HistoryComponent