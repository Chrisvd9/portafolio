import React, { useState } from "react";
import { data } from "../../data";
import "./portafolio.css";

const Portafolio = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    elementsPerPage: 6,
    totalElements: data.length,
  });
  const handlePagination = (type) => {
    if (type === "prev") {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage - 1,
      });
    } else {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage + 1,
      });
    }
  };

  const startIndex = (pagination.currentPage - 1) * pagination.elementsPerPage;
  const endIndex = startIndex + pagination.elementsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <section id="portafolio">
      <h5>Mis últimos trabajos</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        {paginatedData?.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer noopener"
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
        <div className="container-pagination">
          <ul className="pagination">
            <li>
              {pagination?.currentPage > 1 && (
                <a
                className="btn btn-primary"
                  onClick={() => handlePagination("prev")}
                >
                  Anterior
                </a>
              )}
            </li>
            <li>
              {pagination?.currentPage <
                pagination.totalElements / pagination.elementsPerPage && (
                <a
                className="btn btn-primary"
                  onClick={() => handlePagination()}
                >
                  Siguiente
                </a>
              )}
            </li>
          </ul>
        </div>
    </section>
  );
};

export default Portafolio;
