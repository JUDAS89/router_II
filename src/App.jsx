import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import {PokemonProvider} from './context/PokemonContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones/:id" element={<Pokemones />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;