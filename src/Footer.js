import React from 'react';
import "./footer.css"

const Footer = ({theme}) => {
  return (
    <div className={`footer ${theme}`}>
      <a href="https://linkedin.com/in/sanket-bhosale-3108751a7" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://api.whatsapp.com/send?phone=9112454898" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.instagram.com/_sanket_bhosale" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="mailto:sanketbhosale4898@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
        </a>
    </div>
  );
};

export default Footer;
