import React from "react";
import "./experience.css";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontEndSkills = [
    {
      id: 1,
      name: "React",
      level: "Experienced",
    },
    {
      id: 2,
      name: "HTML",
      level: "Experienced",
    },
    {
      id: 3,
      name: "CSS",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "JavaScript",
      level: "Experienced",
    },
    {
      id: 5,
      name: "TypeScript",
      level: "Beginner",
    },
  ];

  const backEndSkills = [
    {
      id: 1,
      name: "Node Js",
      level: "Intermediate",
    },
    {
      id: 2,
      name: "Java",
      level: "Beginner",
    },
    {
      id: 3,
      name: "Spring Boot",
      level: "Beginner",
    },
  ];
  return (
    <section id="experience" className="experience">
      <h5>What skills I have</h5>
      <h1 className="experience__header">My Experience</h1>
      <div className="experience__container">
        <div className="front-end">
          <h3 className="f-tilte">Front End Development</h3>
          <div className="skill__tile__container">
            {frontEndSkills.map((skill) => {
              return (
                <ul className="skill__tile" key={skill.id}>
                  <BsFillPatchCheckFill color="4db5ff" />
                  <li>{skill.name}</li>
                  <small>{skill.level}</small>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="back-end">
          <h3 className="f-tilte">Back End Development</h3>
          <div className="skill__tile__container">
            {backEndSkills.map((skill) => {
              return (
                <ul className="skill__tile" key={skill.id}>
                  <BsFillPatchCheckFill color="4db5ff" />
                  <li>{skill.name}</li>
                  <small>{skill.level}</small>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
