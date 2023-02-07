import React from "react";
import CV from "../../assests/CV-CHRISTIAN-VERGARA-TEMPLATE-2-2023.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contáctame
      </a>
    </div>
  );
};

export default CTA;
