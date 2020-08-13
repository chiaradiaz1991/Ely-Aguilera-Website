import React from "react";
import instagram from '../../assets/ig.png'
import email from '../../assets/email.png'

const Contact = () => {
  return (
    <>
      <div
        role="main"
        className="container-contact"
      >
        <h1 className="title-section">CONTACTO</h1>
        <div className="side-information">
          <div className="container-a">
            <img src={email} alt="" />
          <a href="mailto:ely.zabeta70@gmail.com">ely.zabeta70@gmail.com</a>
          <div className="instagram">
            <img src={instagram} alt="" />
            <a href="https://www.instagram.com/taller.elyaguilera/">taller.elyaguilera</a>
          </div>
          </div>
          <div className="container-b">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
