import React, { createContext, useState, useContext } from 'react';

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonDetails, setPokemonDetails] = useState(null);

  const getPokemonDetails = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPokemonDetails(data);
      return data; // Devolver los detalles del Pokémon
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
      throw error;
    }
  };


  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon, pokemonDetails, setPokemonDetails }}> 
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemon = () => useContext(PokemonContext);

export { PokemonProvider, usePokemon };
export default PokemonContext;