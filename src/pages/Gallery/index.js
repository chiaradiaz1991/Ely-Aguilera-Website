import React from "react";
import { data } from '../../data';


const Gallery = () => {
  return (
    <>
      <div role="main" className="main-container-gallery">
      <h1 className="gallery-title-section">EL TALLER</h1>
      <p className="taller-description">En el taller de Expresión y Creatividad Ely Aguilera fomentamos la imaginación y la creatividad para que el/la alumno/a se maneje con total libertad explorando diferentes materiales. Está dirigido a personas de 6 a 99 años. En el taller siempre tendrás un lienzo en blanco listo para vos, tanto si quieres venir a pasar el día como si deseas explorar tu talento.</p>
        <div className="side-gallery">
          { data.map((el) => <img className="image-gallery" src={el.src} alt="" />) }
        </div>
      </div>
    </>
  );
};

export default Gallery;
