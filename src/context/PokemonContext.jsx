import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null); // Corrige el nombre de la función

    return (
        <PokemonContext.Provider value={{ pokemonDetails, setPokemonDetails }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => useContext(PokemonContext);