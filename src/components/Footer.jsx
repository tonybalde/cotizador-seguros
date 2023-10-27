
import React from "react";
import "../styles/Footer.css";
import github from "../assets/github.png";

const Footer = () => {
  
  return (
    <div className="footer-container">
      <span>Desarrollado por <b>Tony Baldessari</b></span><a href="https://www.github.com/tonybalde" target="_blank" rel="noreferrer"><img src={github} className="github-icon" alt=""/></a>
    </div>
  );
};

export default Footer;



