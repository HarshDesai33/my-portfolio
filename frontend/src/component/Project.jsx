import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Project.css";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One. This project involves working with React and Bootstrap.",
    imageUrl: "https://wallpapercave.com/wp/wp7453739.jpg",
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief description of Project Two. This project involves working with Node.js and Express.",
    imageUrl: "https://wallpapercave.com/wp/wp7453739.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "A brief description of Project Three. This project involves working with MongoDB and Mongoose.",
    imageUrl: "https://wallpapercave.com/wp/wp7453739.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card project-card">
                <div className="card-img-wrapper">
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
