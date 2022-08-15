import React from "react";
import { Title } from "../Components";
import { BsEnvelope } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

export const Workshops = () => {
  return (
    <div className="workshops">
      <Title>Workshops</Title>
      <p>
        En mi (este) taller hacemos cursos donde podés aprender a trabajar con diferentes técnicas y
        materiales tales como óleos, acuarelas, tiza pastel, óleos pastel, mix media, entre otros.
      </p>
      <div>
        <p>
          Si te interesa algún taller y queres participar para explorar, aprender y disfrutar, podés
          comunicarte por MD.
          <div className="redes-workshop">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/taller.elyaguilera/"
              target="_blank"
              className="link-workshop"
            >
              <span>
                {" "}
                <SiInstagram size={20} color="#ff8a80" />
              </span>
              taller.elyaguilera
            </a>{" "}
            <a
              rel="noreferrer"
              href="mailto:taller.elyaguilera@gmail.com"
              target="_blank"
              className="link-workshop"
            >
              <span>
                {" "}
                <BsEnvelope size={20} color="#ff8a80" />
              </span>
              taller.elyaguilera@gmail.com
            </a>{" "}
            <a
              rel="noreferrer"
              href="https://www.facebook.com/ely.scrap"
              target="_blank"
              className="link-workshop"
            >
              <span>
                {" "}
                <FaFacebookSquare size={20} color="#ff8a80" />
              </span>
              Ely Aguilera
            </a>{" "}
          </div>
        </p>
      </div>
    </div>
  );
};
