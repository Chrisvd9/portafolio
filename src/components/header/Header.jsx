import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assests/me-about.png';
import HeaderSocials from './HeaderSocials';
import 'animate.css';


const Header = () => {
    return (
        <header>
            <div className="container header__container ">
                <h5>Bienvenidos soy</h5>
                <h1>Christian Vergara</h1>
                <h5 className="text-light">Desarrollador Full-Stack JavaScript MERN y AWS Cloud Practitioner</h5>
                <CTA />     
                <HeaderSocials />

                <div className="me">
                    <img className='header-img animate__animated animate__backInLeft' src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Desplazarse hacia abajo</a>
            </div>
        </header>
    );
}

export default Header;
