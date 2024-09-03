import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <>
        <Link to="/favorites">Избранные</Link>
        <br /> <br />
        <Link to="/catalog">Каталог</Link>
    </>
  )
}

export default Homepage