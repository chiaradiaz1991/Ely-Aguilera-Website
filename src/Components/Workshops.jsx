import React from "react";
import { Title } from ".";

export const Workshops = () => {
  return (
    <div className="workshops">
      <Title>Workshops</Title>
      <p>
        En el taller también realizamos workshops para aprender a trabajar con diferentes materiales
        y técnicas.{" "}
      </p>
      <div>
        <p>
          Si te interesa realizar un workshop en mi taller, podes comunicarte por MD a mi instagram{" "}
          <a
            rel="noreferrer"
            href="https://www.instagram.com/taller.elyaguilera/"
            target="_blank"
            className="link-workshop"
          >
            taller.elyaguilera
          </a>{" "}
          o enviame un mail a{" "}
          <a
            rel="noreferrer"
            href="mailto:taller.elyaguilera@gmail.com"
            target="_blank"
            className="link-workshop"
          >
            taller.elyaguilera@gmail.com
          </a>{" "}
          .
        </p>
      </div>
    </div>
  );
};
