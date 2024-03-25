import React from "react";
import photo from "../assets/about-me-img.jpeg";
import { Title } from ".";

export const AboutMe = () => {
  return (
    <div className="main-container-about">
      <img src={photo} alt="" className="ely-photo" />

      <div className="about-me-text">
        <Title>SOBRE MI</Title>
        <p className="description-about">
          Nací en Buenos Aires, Argentina. Soy artista de nacimiento.
        </p>
        <p>
          Estoy casada y tengo 3 hijas. Desde pequeña me sedujo todo lo
          relacionado al arte, pasando por diferentes lenguajes artísticos y
          especializandome en la pintura. El pincel fue mi gran aliado
          explorando sobre distintas superficies y materiales. Con experiencia
          de más de 30 años, tengo mi propio taller en el cual enseño diversas
          técnicas como óleo, acrilicos, acuarelas, tiza pastel, pátinas, entre
          otras.
        </p>
        <p>
          Cuando me preguntan <i>¿Qué es el arte?</i> Yo digo, es la sensación
          que provoca un artista, es un cruce de emociones que te atraviesa el
          cuerpo, la mente y el espiritu. Sucede cuando se mira a un pintor
          pintar, a una bailarina bailar, a un cantor cantar,a un músico tocar.
          Es eso....me gusta o no me gusta. Hace veinte años que tengo taller y
          más de treinta que pinto. Estudie la tecnicatura en arte terapia y me
          sigo perfeccionando en cuanto lenguaje artístico y humanístico se me
          presenta, porque trabajar con personas con alto grado de sensibilidad
          requiere perfeccionamiento constante. Como formadora de artistas
          siento tener ese compromiso. Me hace bien al espíritu. Me enorgullece
          tener individuos que quieran expresarse, los ayudo a canalizar y
          encontrar sus potenciales. Mi taller es un lugar de encuentro cálido,
          divertido, dinámico y de aprendizaje constante donde cada uno se
          expresa con libertad y autonomía.
        </p>
        <p style={{ paddingBottom: "2rem" }}>
          Expuse en diferentes galerías de Buenos Aires, Rosario y Usuahia,
          Argentina. Soy{" "}
          <b>Técnica superior en Arte Terapia y Acompañante Terapéutico</b>.
          Fusiono lo aprendido con mi estilo propio y eso hace que mis trabajos
          sean destacados.
        </p>
      </div>
    </div>
  );
};
