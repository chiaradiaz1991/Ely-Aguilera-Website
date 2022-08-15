import React, { useRef, useState, useEffect } from "react";
import headerLogo from "../src/assets/ELyOneLine.png";
import { ScrollToTop, Workshops, Home, Gallery, Info, AboutMe } from "./Components";
import { Cross as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

const menuVariants = {
  opened: {
    top: "50px",
  },
  closed: {
    top: "-100vh",
  },
};

const App = () => {
  const mainRef = useRef(null);
  const sobreMiRef = useRef(null);
  const alumnosRef = useRef(null);
  const infoRef = useRef(null);
  const seminariosRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <div role="main" className="main-container">
      <header>
        <div className="container-header">
          <img
            onClick={() => scrollToRef(mainRef)}
            src={headerLogo}
            alt="ely-aguilera-taller-de-arte-y-creatividad-logo"
            className="logo-header"
          />
          <div className="burger-container">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fdf0ed" />
          </div>
        </div>
        <div className="links-desktop">
          <button onClick={() => scrollToRef(sobreMiRef)} className="link">
            Sobre Mí
          </button>
          <button onClick={() => scrollToRef(alumnosRef)} className="link">
            El Taller
          </button>
          <button onClick={() => scrollToRef(seminariosRef)} className="link">
            Workshops
          </button>
          <button onClick={() => scrollToRef(infoRef)} className="link">
            Información
          </button>
        </div>
        <motion.div
          className="header-links"
          initial={false}
          animate={isOpen && isMobile ? "opened" : "closed"}
          variants={menuVariants}
        >
          <button onClick={() => scrollToRef(sobreMiRef)} className="link">
            Sobre Mí
          </button>
          <button onClick={() => scrollToRef(alumnosRef)} className="link">
            El Taller
          </button>
          <button onClick={() => scrollToRef(seminariosRef)} className="link">
            Workshops
          </button>
          <button onClick={() => scrollToRef(infoRef)} className="link">
            Información
          </button>

          <div className="redes-header-mobile">
            <p>Mis redes sociales</p>
            <div className="redes">
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

            <div className="redes">
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
            <div className="redes">
              <FaFacebookSquare size={20} color="#ff8a80" />
              <a
                rel="noreferrer"
                href="https://www.facebook.com/ely.scrap"
                target="_blank"
                className="link"
              >
                Ely Aguilera
              </a>
            </div>
          </div>
        </motion.div>
      </header>
      <div ref={mainRef} className="section">
        <Home />
      </div>

      <div ref={sobreMiRef} className="section">
        <AboutMe />
      </div>
      <div ref={alumnosRef} className="section">
        <Gallery />
      </div>
      <div ref={seminariosRef} className="section">
        <Workshops />
      </div>

      <div ref={infoRef} className="section">
        <Info />
      </div>
      <ScrollToTop />
      <footer className="footer">
        <p>Hecho con ♥️ por tus gemelas 👯‍♀️</p>
      </footer>
    </div>
  );
};

export default App;
