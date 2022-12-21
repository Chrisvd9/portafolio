import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Habilidades</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend </h3>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermedio - Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermedio - Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Nextjs</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermedio - Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Intermedio - Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermedio - Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermedio - Avanzado</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
          <div className="experience_content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
