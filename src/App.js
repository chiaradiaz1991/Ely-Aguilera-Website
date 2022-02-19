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

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Gallery from "./pages/Gallery";
import Information from "./pages/Information";
import Wrapper from "./Components/Wrapper";
import Scroll from "./Components/Scroll";

const App = () => {
  return (
    <div role="main" className="main-container">
      <div className="desktop-links">
        <Wrapper>
          <HomePage />
          <AboutMe />
          <Gallery />
          <Information />
        </Wrapper>
      </div>
      {/* <div className="mobile-links">
        <HomePage />
        <AboutMe />
        <Gallery />
        <Information />
        <Scroll scrollStepInPx="50" delayInMs="16.66" />
      </div> */}
    </div>
  );
};

export default App;
