import React from "react";
import "./about.css";
import ME from "../../assests/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
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
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>8 meses</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>1 cliente</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>12 proyectos completados</small>
            </article>
          </div>

          <p>
            Desarrollador Full Stack y AWS Cloud Practitioner. Con una amplia
            gama de habilidades tecnológicas. Proactivo, eficaz, empático,
            amable, respetuoso y profesional. Mi objetivo es incorporarme a una
            empresa u organización, aportando mis conocimientos como
            desarrollador, y continuar aprendiendo nuevas tecnologías, para
            enfrentar los más diversos y desafiantes problemas.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
