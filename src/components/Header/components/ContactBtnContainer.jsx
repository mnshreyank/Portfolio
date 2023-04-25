import React from "react";
import CV from "../../../assets/SHREYANK_M_N_Resume.pdf";

import "./contactBtnContainer.css";

const ContactBtnContainer = () => {
  return (
    <div className="cbc">
      <a download href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default ContactBtnContainer;
