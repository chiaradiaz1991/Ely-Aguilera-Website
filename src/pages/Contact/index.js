import React from "react";
import instagram from "../../assets/ig.png";
import email from "../../assets/email.png";

const Contact = () => {
  return (
    <>
      <div role="main" className="main-container-contact">
        <h1 className="contact-title-section">CONTACTO.</h1>
        <div className="side-contact">
          <div className="social-media">
            <img src={email} alt="" className="logo" />
            <a href="mailto:ely.zabeta70@gmail.com" target="_blank">ely.zabeta70@gmail.com</a>
          </div>
          <div className="social-media">
            <img src={instagram} alt="" className="logo" />
            <a href="https://www.instagram.com/taller.elyaguilera/" target="_blank">
              taller.elyaguilera
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
