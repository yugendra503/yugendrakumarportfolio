import React from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaEnvelope,  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiBootstrap, SiJquery, SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import profileImg from '../assests/yogis.png'
import Typewriter from "typewriter-effect";
import "./About.css";
import aboutImg from '../assests/Yugendra.PNG'
import "./Projects.css";
import "./Contact.css";
import Contact from "./Contact";


const Home = () => {
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
    const leftSkills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "CSS / CSS3", level: 85, icon: <FaCss3Alt /> },
    { name: "Bootstrap", level: 90, icon: <SiBootstrap /> },
    { name: "JavaScript", level: 85, icon: <FaJsSquare /> },
    { name: "jQuery", level: 80, icon: <SiJquery /> },
  ];

  const rightSkills = [
    { name: "React.js", level: 90, icon: <FaReact /> },
    { name: "Redux", level: 82, icon: <SiRedux /> },
    { name: "Node.js", level: 85, icon: <FaNodeJs /> },
    { name: "Express.js", level: 88, icon: <SiExpress /> },
    { name: "MongoDB", level: 90, icon: <SiMongodb /> },
  ];
  return (
    <>
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm <span className="highlight">Aviligonda Yugendra Kumar</span></h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "MERN Full Stack Developer 💻",
                  "React  Developer",
                  "React.js |Express.js | Node.js | MongoDB",
                  "Building Scalable Web Apps 🚀",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="justify">
     

            I’m a results-driven Full Stack Developer from Hyderabad, India, focused on building performant, scalable, and visually engaging web applications. With expertise in React.js, Node.js, Express, and MongoDB, I create seamless digital solutions that blend functionality with user-first design. Passionate about continuous learning and clean code, I strive to turn ideas into reliable, high-impact products.
          </p>

          <div className="home-buttons">
             <a href="#contact" className="btn hire">Hire Me</a>

<a
  href="https://drive.google.com/uc?export=download&id=1IWF6OuNweS2p5KExPwSOmVtQsTPf_7Dl"
  className="btn resume"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/aviligonda-yugendra-kumar-183588312" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yugendra503" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:aviligondayugendra18@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="home-image">
          <img src={profileImg} alt="Yugendra Kumar" />
        </div>
      </div>

    </section>


     <section className="about" id="about">
          <div className="about-container">
    
            <div className="about-image">
              <img src={aboutImg} alt="Aviligonda Yugendra Kumar" />
            </div>
    
            <div className="about-content">
              <h2>About Me</h2>
              <p className="intro justify">
                I’m <span className="highlight">Aviligonda Yugendra Kumar</span>, a passionate{" "}
                <b>MERN Full Stack Developer</b> from Hyderabad, India.  
                I specialize in developing scalable, high-performance, and responsive web applications using{" "}
                <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.  
                I’m driven by clean design, code quality, and continuous learning.
              </p>
              <p className="justify">One of my key projects is the <span className="highlight">Surgy Life Healthcare Platform</span> ,  a MERN stack application that achieved an implementation accuracy of 88% and streamlined health appointment management through secure authentication and API optimization. I also created the <span className='highlight'>Hyderabad City Explorer</span>, a React-based project that provides real-time city insights with an interactive and responsive UI. Driven by continuous learning and clean code principles, I strive to develop innovative solutions that merge creativity with technology to solve real-world challenges.</p>
    
              <div className="info-grid">
                <div className="info-item">
                 <h4>Full Name :</h4>
                   <p>Aviligonda Yugendra Kumar</p>
                </div>
                <div className="info-item">
                  <h4>Role :</h4>
                  <p>MERN Full Stack Developer</p>
                </div>
                <div className="info-item">
                  <h4>Location :</h4>
                  <p>Hyderabad, India</p>
                </div>
                <div className="info-item">
                  <h4>Email :</h4>
                  <p>aviligondayugendra18@gmail.com</p>
                </div>
              </div>
    
              <div className="cards-section">
                <div className="about-card">
                  <h3>🎓 Education</h3>
                  <p><b>B.Tech (Civil Engineering)</b> — Sri Krishnadevaraya University, Anantapur (2021–2025)</p>
                  <p>Intermediate — Sri Satya Sai Junior College (2019–2021)</p>
                </div>
    
                <div className="about-card">
                  <h3>💼 Experience</h3>
                  <p><b>MERN Full Stack Intern</b> — Elearn Infotech Pvt Ltd (Feb 2025 – Sep 2025)</p>
                  <p>Developed and deployed responsive full-stack web apps using React.js, Node.js, and MongoDB.</p>
                </div>
              </div>
    
    <a
      href="https://drive.google.com/uc?export=download&id=1IWF6OuNweS2p5KExPwSOmVtQsTPf_7Dl"
      className="btn resume"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>        </div>
          </div>
        </section>



  <div className="App " id="skills">
      <section className="skills-section">
        <h2 className="skills-title">My <span>Skills</span></h2>

        <div className="skills-wrapper yogiraju">

          <div className="skills-card">
            {leftSkills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-card">
            {rightSkills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>



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
                <p className="project-desc justify">{project.description}</p>
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




      <div className="contact-section" id="contact">
        
          <Contact/>
        </div>



 </>

  );
};

export default Home;
