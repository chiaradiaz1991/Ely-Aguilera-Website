import React from "react";
import busColor from "../../assets/bus-color.png";
import Map from "../../Components/Map";
import email from "../../assets/email.png";
import instagram from "../../assets/instagram.png";

const Information = () => {
  return (
    <>
      <div role="main" className="main-container-info">
        <h1 className="information-title-section">EL TALLER.</h1>
        <div className="map">
          <Map />
          <div className="contact">
            <div className="social-media">
              <img src={email} className="social-icon" />
              <a
                href="mailto:taller.elyaguilera@gmail.com"
                target="_blank"
                className="link"
              >
                taller.elyaguilera@gmail.com
              </a>
            </div>
            <div className="social-media">
              <img src={instagram} className="social-icon" />
              <a
                href="https://www.instagram.com/taller.elyaguilera/"
                target="_blank"
                className="link"
              >
                taller.elyaguilera
              </a>
            </div>
          </div>
          <div className="left-right-container">
            <div className="left">
              <p className="address">Dirección</p>
              <p className="address-description">
                Olazabal 169, entre Uriarte y Antonio Saenz, Boulogne Sur Mer
                (Zona Norte).
              </p>
              <p className="class">
                Grupos de máx. 4 personas
                <br />
                Protocolos de cuidado
                <br />
                Clases para niños y adultos
              </p>
            </div>
            <div className="right">
              <h3 className="transport">Medios de transporte</h3>
              <div className="bus">
                <div className="bus-description">
                  Colectivo 314
                  <img src={busColor} alt="" className="image-bus-color" />
                </div>
                Colectivo 707
                <br />
                Colectivo 138 (Costera)
                <br />
                Colectivo 437
                <br />
                Colectivo 130 (Estación Boulogne Sur Mer)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
