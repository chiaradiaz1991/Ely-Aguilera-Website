import React from "react";
import homepageLogo from '../../assets/homepage-ely.png'

const HomePage = () => {
  return (
    <>
      <div className="main-container-home" role="main">
        <img src={homepageLogo} alt="" className="home-logo" />
      </div>
    </>
  );
};

export default HomePage;
