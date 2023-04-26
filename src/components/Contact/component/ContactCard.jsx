import React from "react";
import "./contactcard.css";

const ContactCard = ({ icon, title, contactInfo, cref }) => {
  return (
    <div className="contact__card">
      <>{icon}</>
      <h4>{title}</h4>
      <small>{contactInfo}</small>
      <a href={cref} target="_blank" rel="noreferrer">
        Send a message
      </a>
    </div>
  );
};

export default ContactCard;
