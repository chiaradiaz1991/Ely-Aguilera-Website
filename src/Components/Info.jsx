import React from "react";
import { Title } from "../Components";
import { BsEnvelope } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import mapa from "../../src/assets/mapa.png";

export const Info = () => {
  return (
    <div role="main" className="main-container-info">
      <div className="contact-container">
        <Title>CONTACTO</Title>
        <div className="contact-text">
          <p className="contact-section-title">Dirección</p>
          <p className="address-description">
            Coronel Castillo 18, Boulogne Sur Mer (Zona Norte, Bs As).
          </p>

          <p className="contact-section-title">Medios de transporte</p>
          <div className="bus">
            <ul className="bus-description">
              <li>
                <span className="bullet"></span>Colectivo 314
              </li>
              <li>
                <span className="bullet"></span>Colectivo 707
              </li>
              <li>
                <span className="bullet"></span>Colectivo 138 (Costera)
              </li>
              <li>
                <span className="bullet"></span>Colectivo 437
              </li>
              <li>
                <span className="bullet"></span>Colectivo 130 (Estación Boulogne Sur Mer)
              </li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <p className="contact-section-title">Mis Redes</p>
          <div className="social-media">
            <BsEnvelope size={20} color="#ff8a80" />

            <a
              rel="noreferrer"
              href="mailto:taller.elyaguilera@gmail.com"
              target="_blank"
              className="link"
            >
              taller.elyaguilera@gmail.com
            </a>
          </div>
          <div className="social-media">
            <SiInstagram size={20} color="#ff8a80" />

            <a
              rel="noreferrer"
              href="https://www.instagram.com/taller.elyaguilera/"
              target="_blank"
              className="link"
            >
              taller.elyaguilera
            </a>
          </div>
        </div>
      </div>
      <img src={mapa} alt="mapa" />
    </div>
  );
};
