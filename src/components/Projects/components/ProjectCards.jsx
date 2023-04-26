import React from "react";
import "./projectcards.css";

const ProjectCards = ({
  imageSrc,
  title,
  description,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="project__card">
      <img alt={title} src={imageSrc} className="project__image" />
      <h3 className="project__title">{title}</h3>
      {/* <small>{description}</small> */}
      <div className="project__card_btn_container">
        <a href={githubLink} className="btn spcl__btn">
          View Code{" "}
        </a>
        <a href={demoLink} className="btn btn-primary spcl__btn">
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
