import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const Pokemones = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(navigate);
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
            <select onChange={handleSelectPokemon} className="optionPokemon">
                <option value="">Pokemones</option>
                {pokemones.map((pokemon, index) => (
                    <option key={index} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            <button onClick={handleViewDetail} disabled={loading} className="btnDetalle">
                Ver Detalle
            </button>
            {loading && <p>Cargando...</p>}
            {/* Mostrar imagen y características del Pokémon */}
            {pokemonDetails && (
                <div className="cardPokemon">
                    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} className="imgPokemon"/>
                    <div className="caracteristicasPokemon">
                        <h4>{pokemonDetails.name}</h4>
                        <ul className="estadisticasPokemon">
                            {pokemonDetails.stats.map((stat, index) => (
                                <li key={index} className="liEstadisticasPokemon">
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Pokemones;