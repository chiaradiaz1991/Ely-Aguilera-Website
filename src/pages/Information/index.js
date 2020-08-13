import React from "react";
import map from '../../assets/map.png'


const Information = () => {
  return (
    <>
      <div role="main" className="container-where">
        <h1 className="title-section">¿DÓNDE?</h1>
        <div className="map">
          <div>
            <img src={map} alt="map" />
          </div>
          <p className="address">Dirección</p>
          <p className="address-description">
            Olazabal 169, entre Uriarte y Antonio Saenz, Boulogne Sur Mer (Zona
            Norte).
          </p>
          <p className="bus">
            <div className="bus-description">
              <p><strong>314</strong></p>
              <img src="" alt="" />
            </div>
            <div className="bus-description">
              <p><strong>707</strong></p>
            </div>
            <div className="bus-description">
              <p><strong>138</strong> Costera</p>
            </div>
            <div className="bus-description">
              <p><strong>437</strong></p>
            </div>
            <div className="bus-description">
              <p><strong>130</strong> Estación Boulogne Sur Mer</p>
            </div>
          </p>
        </div>
        <div className="contact">
          
        </div>
      </div>
    </>
  );
};

export default Information;
