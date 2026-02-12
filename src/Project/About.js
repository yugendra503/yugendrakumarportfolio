import React from "react";
import "./About.css";
import aboutImg from '../assests/Yugendra.PNG' 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Aviligonda Yugendra Kumar" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="intro">
            I’m <span className="highlight">Aviligonda Yugendra Kumar</span>, a passionate{" "}
            <b>MERN Full Stack Developer</b> from Hyderabad, India.  
            I specialize in developing scalable, high-performance, and responsive web applications using{" "}
            <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.  
            I’m driven by clean design, code quality, and continuous learning.
          </p>

          <div className="info-grid">
            <div className="info-item">
              <h4>Full Name:</h4>
              <p>Aviligonda Yugendra Kumar</p>
            </div>
            <div className="info-item">
              <h4>Role:</h4>
              <p>MERN Full Stack Developer</p>
            </div>
            <div className="info-item">
              <h4>Location:</h4>
              <p>Hyderabad, India</p>
            </div>
            <div className="info-item">
              <h4>Email:</h4>
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
              <p><b>MERN Full Stack Development Intern</b> — Enut Technologies Pvt Ltd (Sep 2025 – Feb 2026)</p>
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
  );
};

export default About;
