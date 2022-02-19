import React from "react";
import Map from "../../Components/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCamera, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Information = () => {
  return (
    <>
      <div role="main" className="main-container-info">
        <h1 className="information-title-section">CONTACTO</h1>
        <div className="contact-container">
          <div className="left-right-container">
            <div className="left">
              <p className="address">Dirección</p>
              <p className="address-description">
                Olazabal 169, entre Uriarte y Antonio Saenz, Boulogne Sur Mer
                (Zona Norte).
              </p>
            </div>
            <div className="right">
              <h3 className="transport">Medios de transporte</h3>
              <div className="bus">
                <div className="bus-description">Colectivo 314 | Colectivo 707 | Colectivo 138 (Costera) | Colectivo 437 | Colectivo 130 (Estación Boulogne Sur Mer)</div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="social-media">
            <FontAwesomeIcon icon={faEnvelope} />
              
              <a
                href="mailto:taller.elyaguilera@gmail.com"
                target="_blank"
                className="link"
              >
                taller.elyaguilera@gmail.com
              </a>
            </div>
            <div className="social-media">
            <FontAwesomeIcon icon={faCamera} />
              
              <a
                href="https://www.instagram.com/taller.elyaguilera/"
                target="_blank"
                className="link"
              >
                taller.elyaguilera
              </a>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </>
  );
};

export default Information;
