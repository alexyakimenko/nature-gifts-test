import { FavoritesWrapper, Favorites, NoContent } from "./Favorites.styled"
import { Container } from "../layout/Container.styled"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useNatureGiftsService from "../../services/NatureGiftsService"
import Spinner from "../spinner"
import CardGrid from "../card-grid"

const FavoritesComponent = () => {
  const {loading, error, getFavorites} = useNatureGiftsService()
  const [data, setData] = useState(null)

    useEffect(() => {
      getFavorites().then(res => {
        const favorites = res.data.filter(item => item.id !== null).map(item => {
          return {
            ...item,
            isLiked: true
          }
        })

        setData(favorites)
      })
    }, [])

    const noContent = (
      <NoContent>
        <p>Список избранного пока пуст. Перейдите на главную, чтобы добавить товары.</p>
        <Link to="/">На главную</Link>
      </NoContent>
    )

  return (
    <FavoritesWrapper>
        <Container>
            <Favorites>
                <h2>Избранное</h2>
                {loading ? <Spinner /> : (
                  data.length == 0 ? noContent : <CardGrid data={data} />
                )}
            </Favorites>
        </Container>
    </FavoritesWrapper>
  )
}

export default FavoritesComponent