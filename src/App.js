 import React from 'react'
 import './App.css';
 import "bootstrap/dist/css/bootstrap.min.css"
 import "bootstrap/dist/js/bootstrap.bundle.min.js"
 import Header from './Header/Header';
 import Footer from './Footer/Footer';
import Home from './Project/Home';
// import Routing from './Routing';
const App = () => {
   return (
    <div>    
        <Header/>
      <Home/>
      <Footer/>
    
    </div>
  )
 }

export default App


// import React from 'react';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Routing from './Routing';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routing />
//       <Footer />
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./App.css";
// // import profileImg from "./assets/yogis.png";
// // import aboutImg from "./assets/Yugendra.PNG";
// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
// import Typewriter from "typewriter-effect";

// const App = () => {
//   const projectData = [
//     {
//       title: "Surgy Life - Healthcare Platform",
//       description:
//         "A MERN full-stack healthcare web app for booking doctor appointments, managing schedules, and patient communication using JWT authentication and Nodemailer integration.",
//       tech: "React, Node.js, Express, MongoDB, JWT, Bootstrap",
//       live: "https://frontendsurgylifemainproject-jrje.vercel.app/",
//       image:
//         "https://i0.wp.com/asianheartinstitute.org/wp-content/uploads/2025/02/How-to-Prepare-for-Your-Heart-Surgery-A-Step-by-Step-Guide.jpg?fit=1572%2C917&ssl=1",
//     },
//     {
//       title: "Hyderabad City Explorer",
//       description:
//         "A React-based single-page app that showcases Hyderabad’s attractions, restaurants, hotels, and travel tips — designed for travelers and locals alike.",
//       tech: "React.js, Bootstrap, REST API, Vercel Deployment",
//       live: "https://hydcityexplorer-backup.vercel.app/",
//       image:
//         "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1742190636845",
//     },
//     {
//       title: "Global Vision Expo",
//       description:
//         "An interactive React-based Expo website featuring event schedules, speaker details, and registration forms. Optimized for responsiveness and performance.",
//       tech: "React.js, CSS3, Bootstrap, REST API, Firebase Hosting",
//       live: "https://globalvisionbyyugendrakumar.web.app/",
//       image:
//         "https://i.pinimg.com/1200x/d0/46/1d/d0461d45b72f9056b2900c577e07e37a.jpg",
//     },
//   ];

//   const skills = [
//     { name: "HTML", level: 90 },
//     { name: "CSS / CSS3", level: 85 },
//     { name: "Bootstrap", level: 80 },
//     { name: "JavaScript", level: 75 },
//     { name: "jQuery", level: 70 },
//     { name: "React.js", level: 80 },
//     { name: "Redux", level: 70 },
//     { name: "Node.js", level: 75 },
//     { name: "Express.js", level: 70 },
//     { name: "MongoDB", level: 80 },
//     { name: "MySQL", level: 85 },
//   ];

//   const toggleMenu = () => {
//     const nav = document.querySelector(".navbar");
//     const icon = document.querySelector(".menu-icon i");
//     nav.classList.toggle("active");
//     icon.classList.toggle("bx-x");
//   };

//   const closeMenu = () => {
//     const nav = document.querySelector(".navbar");
//     const icon = document.querySelector(".menu-icon i");
//     nav.classList.remove("active");
//     icon.classList.remove("bx-x");
//   };

//   return (
//     <>
//       {/* ===== HEADER ===== */}
//       <header className="header">
//         <a href="#home" className="logo">
//           Yugendra Kumar
//         </a>

//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className="bx bx-menu"></i>
//         </div>

//         <nav className="navbar">
//           <a href="#home" className="active" onClick={closeMenu}>
//             Home
//           </a>
//           <a href="#about" onClick={closeMenu}>
//             About
//           </a>
//           <a href="#skills" onClick={closeMenu}>
//             Skills
//           </a>
//           <a href="#projects" onClick={closeMenu}>
//             Projects
//           </a>
//           <a href="#contact" onClick={closeMenu}>
//             Contact
//           </a>
//         </nav>
//       </header>

//       {/* ===== HOME ===== */}
//       <section className="home" id="home">
//         <div className="home-content">
//           <div className="home-text">
//             <h1>
//               Hi, I'm{" "}
//               <span className="highlight">Aviligonda Yugendra Kumar</span>
//             </h1>
//             <h2>
//               <Typewriter
//                 options={{
//                   strings: [
//                     "MERN Full Stack Developer 💻",
//                     "React Developer",
//                     "Building Scalable Web Apps 🚀",
//                   ],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h2>
//             <p>
//               I’m a passionate Full Stack Developer from Hyderabad, India. I
//               love crafting modern, responsive, and high-performance web
//               applications using React, Node.js, Express, and MongoDB.
//             </p>

//             <div className="home-buttons">
//               <a href="#contact" className="btn hire">
//                 Hire Me
//               </a>
//               <a
//                 href="https://drive.google.com/uc?export=download&id=1IWF6OuNweS2p5KExPwSOmVtQsTPf_7Dl"
//                 className="btn resume"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Download Resume
//               </a>
//             </div>

//             <div className="social-links">
//               <a
//                 href="https://linkedin.com/in/aviligonda-yugendra-kumar-183588312"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="https://github.com/yugendra503"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </a>
//               <a href="mailto:aviligondayugendra18@gmail.com">
//                 <FaEnvelope />
//               </a>
//             </div>
//           </div>

//           <div className="home-image">
//             {/* <img src={profileImg} alt="Yugendra Kumar" /> */}
//           </div>
//         </div>
//       </section>

//       {/* ===== ABOUT ===== */}
//       <section className="about" id="about">
//         <div className="about-container">
//           <div className="about-image">
//             {/* <img src={aboutImg} alt="Aviligonda Yugendra Kumar" /> */}
//           </div>
//           <div className="about-content">
//             <h2>About Me</h2>
//             <p className="intro">
//               I’m <span className="highlight">Aviligonda Yugendra Kumar</span>, a{" "}
//               <b>MERN Full Stack Developer</b> from Hyderabad, India. I develop
//               scalable and responsive web applications using{" "}
//               <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and{" "}
//               <b>MongoDB</b>.
//             </p>

//             <div className="info-grid">
//               <div className="info-item">
//                 <h4>Full Name:</h4>
//                 <p>Aviligonda Yugendra Kumar</p>
//               </div>
//               <div className="info-item">
//                 <h4>Role:</h4>
//                 <p>MERN Full Stack Developer</p>
//               </div>
//               <div className="info-item">
//                 <h4>Location:</h4>
//                 <p>Hyderabad, India</p>
//               </div>
//               <div className="info-item">
//                 <h4>Email:</h4>
//                 <p>aviligondayugendra18@gmail.com</p>
//               </div>
//             </div>

//             <div className="cards-section">
//               <div className="about-card">
//                 <h3>🎓 Education</h3>
//                 <p>
//                   <b>B.Tech (Civil Engineering)</b> — Sri Krishnadevaraya
//                   University, Anantapur (2021–2025)
//                 </p>
//               </div>

//               <div className="about-card">
//                 <h3>💼 Experience</h3>
//                 <p>
//                   <b>MERN Full Stack Intern</b> — Elearn Infotech Pvt Ltd (Feb
//                   2025 – Sep 2025)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== SKILLS ===== */}
//       <section className="skills-section" id="skills">
//         <h2 className="skills-title">My Skills</h2>
//         <div className="skills-container">
//           {skills.map((skill, index) => (
//             <div key={index} className="skill">
//               <div className="skill-info">
//                 <span>{skill.name}</span>
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default App;
