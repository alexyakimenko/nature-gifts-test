import { Link } from "react-router-dom"
import {Container} from "../components/layout/Container.styled"
import "./demo_homepage.css"

const Homepage = () => {
  const path = import.meta.env.VITE_APP_PATH
  return (
    <div className="wrapper">
      <Container>
        <Link className="link" to={`${path}/catalog`}>Демо: Каталог</Link>
        <br /> <br />
        <Link className="link" to={`${path}/favorites`}>Демо: Избранные</Link>
      </Container>
    </div>
  )
}

export default Homepage