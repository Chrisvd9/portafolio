import React, { useState } from "react";
import { useEffect } from "react";
import { data } from "../../data";
import "./portafolio.css";

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>Mis últimos trabajos</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        {data?.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener">
                  GitHub
                </a>
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Live Demo
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
