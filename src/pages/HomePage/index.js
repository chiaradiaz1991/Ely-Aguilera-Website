import React from "react";
import { Link } from "react-router-dom";
// import backgroundImage from "../../assets/home-background.png";
import homepageLogo from '../../assets/homepage-ely.png'

const HomePage = () => {
  return (
    <>
      <div className="main-container-home" role="main">
        <img src={homepageLogo} alt="" />
      </div>
    </>
  );
};

export default HomePage;
