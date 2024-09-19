import { Link } from "react-router-dom"
import {Container} from "../components/layout/Container.styled"
import "./demo_homepage.css"

const Homepage = () => {
  return (
    <div className="wrapper">
      <Container>
        <Link className="link" to="/catalog">Демо: Каталог</Link>
        <br /> <br />
        <Link className="link" to="/favorites">Демо: Избранные</Link>
      </Container>
    </div>
  )
}

export default Homepage