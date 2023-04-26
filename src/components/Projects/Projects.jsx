import React from "react";
import image1 from "../../assets/portfolio1.jpg";
import image2 from "../../assets/portfolio2.jpg";
import image3 from "../../assets/portfolio3.jpg";
import ProjectCards from "./components/ProjectCards";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo App",
      description: "A simple app that keeps track of all the todos",
      imageSrc: image1,
      githubLink: "",
      demoLink: "",
    },
    {
      id: 2,
      title: "Color Generator",
      description: "A simple color generator app",
      imageSrc: image2,
      githubLink: "",
      demoLink: "",
    },
    {
      id: 3,
      title: "CodePen Clone",
      description: "A clone of codepen that is a text editor",
      imageSrc: image3,
      githubLink: "",
      demoLink: "",
    },
  ];
  return (
    <section id="projects" className="projects">
      <h5 className="project__sub">Get to know</h5>
      <h1 className="project__header">My Projects</h1>
      <div className="project__container">
        {projects.map((project) => {
          return (
            <ProjectCards
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
