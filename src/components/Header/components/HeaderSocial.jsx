import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import "./headerSocial.css";

const HeaderSocial = () => {
  return (
    <div className="header-social-container">
      <a href="https://github.com/mnshreyank?tab=repositories">
        <AiFillGithub size="24px" />
      </a>
      <a href="www.linkedin.com/in/shreyank-m-n-3b0830184">
        <AiFillLinkedin size="24px" />
      </a>
      {/* <a href="https://google.com">
        <AiFillGoogleCircle size="24px" />
      </a> */}
    </div>
  );
};

export default HeaderSocial;
