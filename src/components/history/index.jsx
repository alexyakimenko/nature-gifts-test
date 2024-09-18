import { Container } from "../layout/Container.styled"
import { History, HistoryWrapper } from "./History.styled"

import Spinner from "../spinner"
import CardGrid from "../card-grid"
import useNatureGiftsService from "../../services/NatureGiftsService"
import { useEffect, useState } from "react"

const HistoryComponent = () => {
  const {loading, error, getCategoryProducts} = useNatureGiftsService()
  const [data, setData] = useState({})

  useEffect(() => {
      getCategoryProducts(78).then(res => setData(res.data))
  }, [])

  return (
    <HistoryWrapper>
      <Container>
        <History>
          <h2>Просмотренные товары</h2>
          {loading ? <Spinner /> : <CardGrid data={data} />}
        </History>
      </Container>
    </HistoryWrapper>
  )
}

export default HistoryComponent