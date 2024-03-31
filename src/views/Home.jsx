import React, { useEffect } from "react";
import { usePokemon } from "../context/PokemonContext"
import presentacionImage from "../assets/He.webp"

const Home = () => {
    const { setPokemonDetails } = usePokemon();

    // Función para limpiar los detalles del Pokémon
    useEffect(() => {
        return () => {
            setPokemonDetails(null);
        };
    }, []);

    return (
        <div className="presentacionHome">
            <h1>Bienvenido maestro pokemón</h1>
            <img src={presentacionImage} alt="pikachu" className="presentacionImage"/>
        </div>
    )
}

export default Home