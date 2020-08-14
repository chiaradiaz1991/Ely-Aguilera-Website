import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Logo from "./assets/logo-ely.png";

// Components

import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Information from './pages/Information';
import Wrapper from './Components/Wrapper';
import Scroll from './Components/Scroll';

const App = () => {
  return (
    <div role="main" className="main-container">
      <div className="desktop-links">
        <Router>
          <Wrapper>
            <ul>
              <div className="logo-container">
                <li className="links">
                  <Link to="/" className="nav-links">
                    <img className="logo" src={Logo} alt="" />
                  </Link>
                </li>
              </div>
              <div className="other-links" role="navigation">
                <li className="links">
                  <NavLink
                    to="/sobre-mi"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    ¿Quién soy?
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink
                    to="/el-taller"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    El Taller
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink
                    to="/galeria"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    Galería
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink
                    to="/contacto"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    Contacto
                  </NavLink>
                </li>
              </div>
            </ul> 
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/sobre-mi">
                <AboutMe />
              </Route>
              <Route path="/galeria">
                <Gallery />
              </Route>
              <Route path="/el-taller">
                <Information />
              </Route>
              <Route path="/contacto">
                <Contact />
              </Route>
            </Switch> 
           </Wrapper>
        </Router>
      </div>
      <div className="mobile-links">
        <img src={Logo} alt="" className="logo" />
        <HomePage />
        <AboutMe />
        <Information />
        <Gallery />
        <Contact />
        <Scroll scrollStepInPx="50" delayInMs="16.66"/>
      </div>
      <footer><p className="footerUs">desarrollada y diseñada por&nbsp;<a href="https://chiaradiaz.com" target="_blank" className="footerUsA">Chiara Diaz&nbsp;</a>con 💖&nbsp;®️ All rights reserved</p></footer>
    </div>
  );
};

export default App;
