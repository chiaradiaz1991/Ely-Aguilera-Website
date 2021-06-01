import React from "react";
import { data } from '../../data';


const Gallery = () => {
  return (
    <>
      <div role="main" className="main-container-gallery">
        <div className="side-gallery">
          { data.map((el) => <img className="image-gallery" src={el.src} alt="" />) }
        </div>
      </div>
    </>
  );
};

export default Gallery;
