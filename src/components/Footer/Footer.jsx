import React from "react";
import { AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">Shreyank MN</div>
      <div className="permanent__links">
        <a href="#" className="footer__link">
          Home
        </a>
        <a href="#about" className="footer__link">
          About Me
        </a>
        <a href="#experience" className="footer__link">
          Experience
        </a>
        <a href="#projects" className="footer__link">
          Projects
        </a>
        <a href="#contact" className="footer__link">
          Contact
        </a>
      </div>
      <div className="social__links">
        <a href="https://in.linkedin.com/">
          <AiFillLinkedin size="24px" color="white" />
        </a>
        <a href="https://google.com">
          <AiFillGoogleCircle size="24px" color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
