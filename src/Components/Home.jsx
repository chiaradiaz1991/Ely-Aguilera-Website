import React from "react";
import homepageLogo from "../assets/ElyBlancoConSombra.png";

export const Home = () => {
  return (
    <div className="main-container-home" role="main">
      <img src={homepageLogo} alt="" className="home-logo" />
    </div>
  );
};
