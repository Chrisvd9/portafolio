import React from 'react';
import './about.css';
import ME from '../../assests/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Lo que tienes que saber</h5>
            <h2>Sobre mí</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Sobre mí" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>6 meses</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clientes</h5>
                            <small>0 por el momento</small>
                        </article>
                        
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>3 proyectos completados</small>
                        </article>
                    </div>

                    <p>
                    Desarrollador Full Stack. Con una amplia gama de habilidades tecnológicas como: JavaScript, React.js, Git, Node.js, MongoDB, Mongoose, Express, HTML5, CSS3 y AWS . 
                    Proactivo, eficaz, empático y profesional en lo que hago. Amable, respetuoso. 
                    Mi objetivo es incorporarme a una empresa u organización, aportando mis conocimientos como desarrollador, y  continuar aprendiendo nuevas tecnologías, para enfrentar los más diversos y desafiantes problemas.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Hablemos</a>
                </div>
            </div>
        </section>
    );
}

export default About;
