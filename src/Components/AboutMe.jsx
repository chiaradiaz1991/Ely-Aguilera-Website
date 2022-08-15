import React from "react";
import photo from "../assets/about-me-img.jpeg";
import { Title } from ".";

export const AboutMe = () => {
  return (
    <div className="main-container-about">
      <img src={photo} alt="" className="ely-photo" />

      <div className="about-me-text">
        <Title>SOBRE MI</Title>
        <p className="description-about">
          Nací en Buenos Aires, Argentina. Estoy casada y tengo 3 hijas. Desde pequeña me sedujo
          todo lo relacionado al arte, pasando por diferentes lenguajes artísticos y
          especializandome en la pintura. El pincel fue mi gran aliado explorando sobre distintas
          superficies y materiales. Con experiencia de más de 30 años, tengo mi propio taller en el
          cual enseño diversas técnicas como óleo, acrilicos, acuarelas, tiza pastel, pátinas, entre
          otras.
          <br />
          Expuse en diferentes galerías de Buenos Aires, Rosario y Usuahia, Argentina. Soy Técnica
          superior en Arte Terapia y Acompañante Terapéutico.
          <br />
          Fusiono lo aprendido con mi estilo propio y eso hace que mis trabajos sean destacados.
        </p>
      </div>
    </div>
  );
};
