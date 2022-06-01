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
                            <small>4 meses</small>
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
                    Soy un joven de 23 años proactivo, eficaz, empático y profesional en lo que hago. Amable, respetuoso. Mi objetivo es desempeñarme de manera correcta, cumpliendo con mi labor, ayudando a quien lo necesite y desarrollando mi crecimiento personal. 
                    Profesionalmente soy un programador Full Stack, con ganas de aprender nuevas tecnologías y trabajar en proyectos de desarrollo web. Altamente motivado que busca utilizar tecnologías de punta para enfrentar los más diversos y desafiantes problemas. 
                    Manejo de una amplia gama de habilidades tecnológicas como: JavaScript, React.js, React Boostrap, Redux, Node.js, MongoDB, Mongoose, Express, HTML5, CSS3 y AWS .
                    </p>

                    <a href="#contact" className='btn btn-primary'>Hablemos</a>
                </div>
            </div>
        </section>
    );
}

export default About;
