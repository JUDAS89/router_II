import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './views/Home';
import ListPokemon from './components/ListPokemon';
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <div className='App'>
      <PokemonProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<ListPokemon />} /> 
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </div>
  );
}

export default App;