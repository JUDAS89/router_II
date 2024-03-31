import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './views/Home'
import Pokemones from './views/Pokemones'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pokemones" element={<Pokemones />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}