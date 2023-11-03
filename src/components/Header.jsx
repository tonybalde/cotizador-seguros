import house from "../assets/house.png";
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { FcDocument } from 'react-icons/fc';
import "../styles/Header.css";

function Header() {
    return (
        <div className="header-container">
         <header>
            <div className="titulo-container">
                <h1 className="titulo-header">Cotizador de Seguros</h1><img src={house} alt="" className="house-icon"/>
            </div>
            <nav>
                <ul>
                <li>
                    <Link to="/"><FcHome />Incio</Link>
                </li>
                <li>
                    <Link to="/historial"><FcDocument />Ver Historial</Link>
                </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}

export default Header;