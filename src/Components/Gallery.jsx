import React, { useState } from "react";
import { data } from "../data";
import { Title, Categorias } from "../Components";

const todasLasCategorias = ["Todas las fotos", ...new Set(data.map((item) => item.category))];

export const Gallery = () => {
  const [fotos, setFotos] = useState(data);
  const [categorias, setCategorias] = useState(todasLasCategorias);

  const filterItems = (category) => {
    if (category === "Todas las fotos") {
      setFotos(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setFotos(newItems);
  };

  return (
    <div role="main" className="main-container-gallery">
      <div className="el-taller-text">
        <Title>EL TALLER</Title>
        <p className="taller-description">
          En el taller de <span>Expresión y Creatividad Ely Aguilera</span> fomentamos la
          imaginación y la creatividad para que el/la alumno/a se maneje con total libertad
          explorando diferentes materiales. Está dirigido a personas de 6 a 99 años. En el taller
          siempre tendrás un lienzo en blanco listo para vos, tanto si quieres venir a pasar el día
          como si deseas explorar tu talento.
        </p>
      </div>
      <Categorias categorias={categorias} filterItems={filterItems} />{" "}
      <div className="side-gallery">
        {fotos.map((el, index) => (
          <img className="image-gallery" src={el.src} alt="arte" key={index} />
        ))}
      </div>
      
    </div>
  );
};
