import React, { useState } from "react";
import { AiFillFire, AiFillHome } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBook, FaUserAlt } from "react-icons/fa";
import "./navigationpane.css";

const NavigationPane = () => {
  const [activeLink, setactiveLink] = useState("#");

  const handleLinkClick = (path) => {
    setactiveLink(path);
  };

  return (
    <div className="nav-container">
      <a
        href="#"
        onClick={() => handleLinkClick("#")}
        className={`${activeLink === "#" ? "active" : ""}`}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => handleLinkClick("#about")}
        className={`${activeLink === "#about" ? "active" : ""}`}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        className={`${activeLink === "#experience" ? "active" : ""}`}
        onClick={() => handleLinkClick("#experience")}
      >
        <AiFillFire />
      </a>
      <a
        href="#projects"
        className={`${activeLink === "#projects" ? "active" : ""}`}
        onClick={() => handleLinkClick("#projects")}
      >
        <FaBook />
      </a>
      <a
        href="#contact"
        className={`${activeLink === "#contact" ? "active" : ""}`}
        onClick={() => handleLinkClick("#contact")}
      >
        <BsTelephoneFill />
      </a>
    </div>
  );
};

export default NavigationPane;
