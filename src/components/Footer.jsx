import history from "../assets/history.png";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
             <h2 className="text-footer">Ver el Historial</h2><img src={history} alt="" className="history-icon"/>
        </div>
    );
}

export default Footer;
