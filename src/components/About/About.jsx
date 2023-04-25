import React from "react";
import { FaMedal } from "react-icons/fa";
import { GiBrain, GiSecretBook } from "react-icons/gi";
import meAbout from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  const aboutMeInfo = [
    {
      id: 1,
      title: "Experience",
      description: "3+ years of experience",
      icon: <FaMedal color="#4db5ff" size="24px" />,
    },
    {
      id: 2,
      title: "Skills",
      description: "React, HTML, CSS, JS, Typescript, NodeJS,",
      icon: <GiBrain color="#4db5ff" size="24px" />,
    },
    {
      id: 3,
      title: "Projects",
      description: "React projects",
      icon: <GiSecretBook color="#4db5ff" size="24px" />,
    },
  ];

  return (
    <section id="about" className="about__page">
      <h6>Get to know</h6>
      <h1 className="about__heading">About Me</h1>
      <div className="about__container">
        <div className="about__image__container">
          <img src={meAbout} alt="Me" className="about__me" />
        </div>
        <div className="about__desc_conatiner">
          <div className="about__tile__container">
            {aboutMeInfo.map((eachTile) => {
              return (
                <article key={eachTile.id} className="about__tile">
                  <>{eachTile.icon}</>
                  <h4>{eachTile.title}</h4>
                  <small>{eachTile.description}</small>
                </article>
              );
            })}
          </div>
          <div className="about__text">
            <p>
              Currently working as a Frontend developer in Optum. I have a total
              experience of 3 year and have worked on latest frontend
              technologies sunch as React, HTML, CSS, JavaScript, Typescript and
              have worked on several projects that are responsive and user
              friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
