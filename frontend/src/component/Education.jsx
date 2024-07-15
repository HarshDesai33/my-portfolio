import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Education.css";

const Education = () => {
  const education = [
    {
      institution: "VNSGU",
      degree: "Bachelor of Computer Applications",
      year: "2021-2024",
      description:
        "Focused on web development, database management, and software engineering.",
    },
    {
      institution: "J.B. & Karp vidya snakul",
      degree: "12th",
      year: "2020-2021",
      description: "Specialized in Accounting",
    },
    {
      institution: "J.B. & Karp vidya snakul",
      degree: "10th",
      year: "2018-2019",
      description: "Specialized in Maths",
    },
  ];

  return (
    <section id="education" className="education-section bg-black">
      <div className="container">
        <h2 className=" display-1 fw-bolder text-white mb-5">EDUCATION</h2>
        <div
          id="educationCarousel"
          className="carousel slide position-relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {education.map((edu, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="education-card bg-dark text-white mx-3">
                  <div className="card-content">
                    <h3 className="institution">{edu.institution}</h3>
                    <p className="degree">{edu.degree}</p>
                    <p className="year opacity-50">{edu.year}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                  <div className="card-decoration overflow-hidden"></div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="circle-animation1"></div> */}
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#educationCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#educationCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="circle-animation2"></div>
    </section>
  );
};

export default Education;
