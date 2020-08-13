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
                    to="/about-me"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    ¿Quién soy?
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink
                    to="/information"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    El Taller
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink
                    to="/gallery"
                    className="nav-links"
                    activeClassName="active-link"
                  >
                    Galería
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink
                    to="/contact"
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
              <Route path="/about-me">
                <AboutMe />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/information">
                <Information />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch> 
           </Wrapper>
        </Router>
      </div>
      <div className="mobile-links">
        <img src={Logo} alt="" />
      </div>
      <footer><p className="footerUs">Esta página fue desarrollada y diseñada por&nbsp;<a href="https://chiaradiaz.com" target="_blank" className="footerUsA">Chiara Diaz&nbsp;</a>con 💖.&nbsp;®️ All rights reserved</p></footer>
    </div>
  );
};

export default App;
