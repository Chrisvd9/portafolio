import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>CHRISTIAN VERGARA WEB DEVELOPER</a>

            <ul className='permalinks'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contact">Contáctame</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Christian Vergara Web Developer.</small>
            </div>
        </footer>
    );
}

export default Footer;
