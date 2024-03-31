import { usePokemon } from "../context/PokemonContext";

const Pokemones = () => {
    const { pokemonDetails } = usePokemon();

    return (
        <div>
            {pokemonDetails && (
                <div>
                    <h2>{pokemonDetails.name}</h2>
                    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                    <p>Altura: {pokemonDetails.height}</p>
                    <p>Peso: {pokemonDetails.weight}</p>
                    {/* Agrega más detalles según sea necesario */}
                </div>
            )}
        </div>
    );
};

export default Pokemones;