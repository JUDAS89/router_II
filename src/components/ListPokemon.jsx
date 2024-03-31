import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const ListPokemon = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPokemonDetails } = usePokemon();
    const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar la lista de Pokémon
    const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado para almacenar el Pokémon seleccionado
    const [loading, setLoading] = useState(false); // Estado para controlar el estado de carga

    useEffect(() => {
        // Función para obtener la lista de Pokémon de la API
        const fetchPokemonList = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20"); // Limita a 20 Pokémon por simplicidad
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPokemonList(data.results); // Almacena la lista de Pokémon en el estado
            } catch (error) {
                console.error("Error fetching Pokémon list:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []); // Ejecuta la solicitud solo una vez al montar el componente

    // Función para manejar el cambio en el selector de Pokémon
    const handleSelectPokemon = (event) => {
        const selectedId = event.target.value;
        const selected = pokemonList[selectedId - 1];
        setSelectedPokemon(selected);
    };

    // Función para manejar el clic en el botón "Ver Detalle" de un Pokémon
    const handleViewDetail = async () => {
        if (!selectedPokemon) return;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`);
            const data = await response.json();
            setPokemonDetails(data);
            navigate(`/pokemones/${selectedPokemon.name}`);
        } catch (error) {
            console.error("Error fetching Pokémon details:", error);
        }
    };

    return (
        <div className='boxPokemon'>
            <h2>Selecciona un Pokémon</h2>
            <select onChange={handleSelectPokemon}>
                <option value="">Pokemones</option>
                {pokemonList.map((pokemon, index) => (
                    <option key={index + 1} value={index + 1}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            <button onClick={handleViewDetail}>Ver Detalle</button>
        </div>
    );
};

export default ListPokemon;