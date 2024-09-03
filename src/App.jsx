import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Header from "./components/header"
import Favorites from "./pages/favorites"
import Homepage from "./pages/Homepage"
import Catalog from "./pages/Catalog"

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  )
}

export default App
