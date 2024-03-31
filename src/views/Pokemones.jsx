import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const Pokemones = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pokemonDetails, setPokemonDetails } = usePokemon();
    const [pokemones, setPokemones] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPokemones = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokemones(data.results);
            } catch (error) {
                console.error('Error fetching Pokémon list:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemones();
    }, []);

    const handleSelectPokemon = (event) => {
        const selectedName = event.target.value;
        const selected = pokemones.find((pokemon) => pokemon.name === selectedName);
        setSelectedPokemon(selected);
    };

    const handleViewDetail = async () => {
        setLoading(true); // Activar loading al iniciar la carga de detalles
        if (!selectedPokemon) return;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPokemonDetails(data); // Almacenar los detalles del Pokémon en el contexto
            navigate(`/pokemones/${selectedPokemon.name}`);
        } catch (error) {
            console.error('Error fetching Pokémon details:', error);
        } finally {
            setLoading(false); // Desactivar loading cuando se completa la carga o hay un error
        }
    };

    return (
        <div className="boxPokemon">
            <h2>Selecciona un Pokémon</h2>
            <select onChange={handleSelectPokemon}>
                <option value="">Pokemones</option>
                {pokemones.map((pokemon, index) => (
                    <option key={index} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            <button onClick={handleViewDetail} disabled={loading}>
                Ver Detalle
            </button>
            {loading && <p>Cargando...</p>}
            {/* Mostrar imagen y características del Pokémon */}
            {pokemonDetails && (
                <div>
                    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                    <h1>{pokemonDetails.name}</h1>
                    <p>Weight: {pokemonDetails.weight}</p>
                    <p>Height: {pokemonDetails.height}</p>
                    {/* revisar mas detalles */}
                </div>
            )}
        </div>
    );
};

export default Pokemones;