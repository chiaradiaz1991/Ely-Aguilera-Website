import React, { useRef } from "react";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Gallery from "./pages/Gallery";
import Information from "./pages/Information";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import headerLogo from "../src/assets/ELyOneLine.png";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const mainRef = useRef(null);
  const sobreMiRef = useRef(null);
  const alumnosRef = useRef(null);
  const infoRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div role="main" className="main-container">
      <header>
        <img
          src={headerLogo}
          alt="ely-aguilera-taller-de-arte-y-creatividad-logo"
          className="logo-header"
        />

        <div className="header-links">
          <button onClick={() => scrollToRef(sobreMiRef)} className="link">
            Sobre Mi
          </button>
          <button onClick={() => scrollToRef(alumnosRef)} className="link">
            Alumnos
          </button>
          <button onClick={() => scrollToRef(infoRef)} className="link">
            Info
          </button>
        </div>
      </header>
      <div ref={mainRef} className="section">
        <HomePage />
      </div>

      <div ref={sobreMiRef} className="section">
        <AboutMe />
      </div>
      <div ref={alumnosRef} className="section">
        <Gallery />
      </div>

      <div ref={infoRef} className="section">
        <Information />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
