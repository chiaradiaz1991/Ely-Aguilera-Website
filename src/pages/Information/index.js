import React from "react";
import map from "../../assets/map.png";
import busColor from '../../assets/bus-color.png'

const Information = () => {
  return (
    <>
      <div role="main" className="main-container-info">
        <h1 className="information-title-section">¿DÓNDE?</h1>
        <div className="map">
          <img src={map} alt="map" className="map-img" />
          <p className="address">Dirección</p>
          <p className="address-description">
            Olazabal 169, entre Uriarte y Antonio Saenz, Boulogne Sur Mer (Zona
            Norte).
          </p>
          <h3 className="transport">Medios de transporte</h3>
          <div className="bus">
            <div className="bus-description">
              <p className="bus-description-text">
                <strong>314</strong>
              </p>
              <img src={busColor} alt="" className="image-bus-color"/>
            </div>
            <div className="bus-description">
              <p className="bus-description-text">
                <strong>707</strong>
              </p>
            </div>
            <div className="bus-description">
              <p className="bus-description-text">
                <strong>138</strong> (Costera)
              </p>
            </div>
            <div className="bus-description">
              <p className="bus-description-text">
                <strong>437</strong>
              </p>
            </div>
            <div className="bus-description">
              <p className="bus-description-text">
                <strong>130</strong> (Estación Boulogne Sur Mer)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
