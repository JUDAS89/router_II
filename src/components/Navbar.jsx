import { NavLink } from "react-router-dom";
import logo from "../assets/logo3.png"
import "../style.css"

export default function Navbar(){
    const setActiveClass = ({ isActive }) => (isActive ? "active": undefined)

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="nav">
                <NavLink className={ setActiveClass } to="/">
                    Home
                </NavLink>
                    {" - "}
                <NavLink className={ setActiveClass } to="/pokemones">
                    Pokemones
                </NavLink>
            </div>
            
        </div>
    )
}