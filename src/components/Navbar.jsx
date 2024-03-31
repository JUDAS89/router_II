import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo3.png"
import "../style.css"

export default function Navbar(){
    const [selectedPokemonId, setSelectedPokemonId] = useState(null);

    const setActiveClass = ({ isActive }) => (isActive ? "active": "inactive")

    const handlePokemonLinkClick = (id) => {
        setSelectedPokemonId(id);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="nav">
                <NavLink
                    className={setActiveClass}
                    to="/"
                    onClick={() => handlePokemonLinkClick(null)} // Limpiar el ID seleccionado al hacer clic en Home
                >
                    Home
                </NavLink>
                {' - '}
                <NavLink
                    className={setActiveClass}
                    to={`/pokemones/${selectedPokemonId}`} // Utilizar el ID seleccionado en el enlace
                    onClick={() => handlePokemonLinkClick(selectedPokemonId)} // Mantener el ID seleccionado
                >
                    Pokemones
                </NavLink>
            </div>
        </div>
    );
}