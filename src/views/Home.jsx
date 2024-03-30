import Navbar from "../components/Navbar";
import presentacionImage from "../assets/He.webp"

const Home = () => {
    return (
        <div className="presentacionHome">
            <h1>Bienvenido maestro pokemón</h1>
            <img src={presentacionImage} alt="pikachu" className="presentacionImage"/>
        </div>
    )
}

export default Home