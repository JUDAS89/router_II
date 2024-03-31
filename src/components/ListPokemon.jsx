import React, { useState } from "react"
import "../style.css"

const ListPokemon = () => {

    const [selectedOption, setSelectedOption] = useState(""); // Estado para almacenar la opción seleccionada

    // Función para manejar el cambio de opción
    const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Actualizar el estado con la opción seleccionada
    };

    return (
        <div className='boxPokemon'>
        
            <h2>Selecciona un pokemón</h2>

            <select value={selectedOption} onChange={handleSelectChange} className="optionPokemon">
                <option value="">Pokemones</option>
                <option value="option1">Opción 1</option>
                <option value="option2">Opción 2</option>
                <option value="option3">Opción 3</option>
            </select>

            <button className='btnDetalle'>Ver Detalle</button>

        </div>
    
    );
}

export default ListPokemon;