import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Header from "./components/header"
import Favorites from "./pages/favorites"
import Homepage from "./pages/Homepage"
import Catalog from "./pages/Catalog"

function App() {
  const path = import.meta.env.VITE_APP_PATH
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path={`${path}/`} element={<Homepage />} />
        <Route path={`${path}/favorites`} element={<Favorites />} />
        <Route path={`${path}/catalog`} element={<Catalog />} />
      </Routes>
    </Router>
  )
}

export default App
