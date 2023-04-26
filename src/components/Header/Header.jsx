import React from "react";
import Me from "../../assets/me.png";
import ContactBtnCotainer from "./components/ContactBtnContainer";
import HeaderSocial from "./components/HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <h5>Hello I am,</h5>
        <h1 className="my__name">Shreyank MN</h1>
        <h4>FrontEnd Developer</h4>
        <ContactBtnCotainer />
        <div className="me">
          <img alt="Me" src={Me} />
        </div>
        <div className="social-container">
          <HeaderSocial />
        </div>
        <div className="header__scroll">
          <a href="#contact">Scroll &gt;&gt;</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
