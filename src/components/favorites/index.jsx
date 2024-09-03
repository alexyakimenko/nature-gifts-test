import { FavoritesWrapper, Favorites, NoContent } from "./Favorites.styled"
import { Container } from "../layout/Container.styled"
import { Link } from "react-router-dom"

const FavoritesComponent = () => {
  return (
    <FavoritesWrapper>
        <Container>
            <Favorites>
                <h2>Избранное</h2>
                <NoContent>
                    <p>Список избранного пока пуст. Перейдите на главную, чтобы добавить товары.</p>
                    <Link to="/">На главную</Link>
                </NoContent>
            </Favorites>
        </Container>
    </FavoritesWrapper>
  )
}

export default FavoritesComponent