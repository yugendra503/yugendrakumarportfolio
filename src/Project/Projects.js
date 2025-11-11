import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Surgy Life - Healthcare Platform",
      description:
        "A MERN full-stack healthcare web app for booking doctor appointments, managing schedules, and patient communication using JWT authentication and Nodemailer integration.",
      tech: "React, Node.js, Express, MongoDB, JWT, Bootstrap",
      live: "https://frontendsurgylifemainproject-jrje.vercel.app/",
      image:
        "https://i0.wp.com/asianheartinstitute.org/wp-content/uploads/2025/02/How-to-Prepare-for-Your-Heart-Surgery-A-Step-by-Step-Guide.jpg?fit=1572%2C917&ssl=1",
    },
    {
      title: "Hyderabad City Explorer",
      description:
        "A React-based single-page app that showcases Hyderabad’s attractions, restaurants, hotels, and travel tips — designed for travelers and locals alike.",
      tech: "React.js, Bootstrap, REST API, Vercel Deployment",
      live: "https://hydcityexplorer-backup.vercel.app/",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1742190636845",
    },
    {
      title: "Global Vision Expo",
      description:
        "An interactive React-based Expo website featuring event schedules, speaker details, and registration forms. Optimized for responsiveness and performance.",
      tech: "React.js, CSS3, Bootstrap, REST API, Firebase Hosting",
      live: "https://globalvisionbyyugendrakumar.web.app/",
      image:
        "https://i.pinimg.com/1200x/d0/46/1d/d0461d45b72f9056b2900c577e07e37a.jpg",
    },
  ];

  return (
    <div className="projects-section py-5" id="projects">
      <h2 className="text-center mb-5 section-title">My Projects</h2>
      <div className="row gx-4 gy-5 justify-content-center">
        {projectData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="project-card shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="project-content">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">
                  <strong>Tech:</strong> {project.tech}
                </p>
                <a
                  href={project.live}
                  className="btn btn-outline-info mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
