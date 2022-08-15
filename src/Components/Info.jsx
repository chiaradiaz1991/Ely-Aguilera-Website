import React, { useState } from "react";
import { Title } from "../Components";
import { BsEnvelope } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import mapa from "../../src/assets/mapa.png";
import { BiCopy } from "react-icons/bi";

export const Info = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div role="main" className="main-container-info">
      <div className="contact-container">
        <Title>INFORMACION</Title>
        <div className="contact-text">
          <p className="contact-section-title">Dirección</p>
          <p className="address-description">
            Coronel Castillo 18, Boulogne Sur Mer (Zona Norte, Bs As).{" "}
            <button
              style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
              onClick={() =>
                copyToClipBoard(
                  "Cnel. José María Castillo 18, B1609AZD Boulogne, Provincia de Buenos Aires, Argentina"
                )
              }
            >
              <BiCopy color="#ff8a80" size={20} />
            </button>
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
      </div>
      <img src={mapa} alt="mapa" className="mapa" />
    </div>
  );
};
