import house from "../assets/house.png";
import { Link } from 'react-router-dom';

import "../styles/Header.css";

function Header() {
    return (
        <div className="header-container">
         <header>
            <h1>Cotizador de Seguros</h1><img src={house} alt="" className="house-icon"/>
            <nav>
                <ul>
                <li>
                    <Link to="/">Incio</Link>
                </li>
                <li>
                    <Link to="/historial">Ver Historial</Link>
                </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}

export default Header;