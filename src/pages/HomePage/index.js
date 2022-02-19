import React from "react";
import homepageLogo from "../../assets/homepage-ely.png";

const HomePage = () => {
  return (
    <>
      <div className="main-container-home" role="main">
        <div className="gradient-circle">
        <div className="container-image-home">
          <img src={homepageLogo} alt="" className="home-logo" />
        </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
