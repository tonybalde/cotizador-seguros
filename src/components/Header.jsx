import house from "../assets/house.png";
import "../styles/Header.css";

function Header() {
    return (
        <div className="header-container">
            <h1>Cotizador de Seguros</h1><img src={house} alt="" className="house-icon"/>
        </div>
    );
}

export default Header;