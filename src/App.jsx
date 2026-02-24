import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DrinksMenu from './pages/DrinksMenu'
import DinnerMenu from './pages/DinnerMenu'
import MurderMystery from './pages/MurderMystery'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<DrinksMenu />} />
        <Route path="/dinner" element={<DinnerMenu />} />
        <Route path="/mystery" element={<MurderMystery />} />
      </Routes>
    </BrowserRouter>
  )
}
