import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>homepage</div>} />
        <Route path="/favorites" element={<div>favorites</div>} />
      </Routes>
    </Router>
  )
}

export default App
