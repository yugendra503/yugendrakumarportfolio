// // src/components/Footer.js
// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Top Section */}
//         <div className="footer-info">
//           <h2 className="footer-name">Aviligonda Yugendra Kumar</h2>
//           <p className="footer-role">MERN Full Stack Developer</p>
//           <p className="footer-location"><FaMapMarkerAlt /> Hyderabad, India</p>
//         </div>

//         {/* Contact Links */}
//         <div className="footer-contact">
//           <a href="mailto:aviligondayugendra18@gmail.com"><FaEnvelope /> aviligondayugendra18@gmail.com</a>
//           <a href="tel:+919347472939"><FaPhoneAlt /> +91 93474 72939</a>
//         </div>

//         {/* Social Icons */}
//         <div className="footer-social">
//           <a href="https://github.com/yugendra503" target="_blank" rel="noreferrer"><FaGithub /></a>
//           <a href="https://linkedin.com/in/aviligonda-yugendra-kumar-183588312" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="footer-bottom">
//         <p>© 2025 Aviligonda Yugendra Kumar. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container container">
        <div className="row footer-content">

          {/* Left Section */}
          <div className="col-md-4 footer-brand">
            <h3 className="footer-name">Aviligonda Yugendra Kumar</h3>
            <p className="footer-role">MERN Full Stack Developer</p>
            <p className="footer-tech">
              <FaReact className="tech-icon" /> React |{" "}
              <FaNodeJs className="tech-icon" /> Node | Express | MongoDB
              
            </p>
            <p className="justify">Let’s build something amazing together 🚀
I’m a MERN Full Stack Developer passionate about crafting scalable, user-centric web applications — driven by curiosity & continuous learning.</p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="col-md-4 footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="/">🏠 Home</a>
              </li>
              <li>
                <a href="/about">👨‍💻 About</a>
              </li>
              <li>
                <a href="/project">💼 Projects</a>
              </li>
              <li>
                <a href="/contact">📩 Contact</a>
              </li>
            </ul>
          </div>



          {/* Right Section - Contact Info */}
          <div className="col-md-4 footer-contact">
            <h5>Contact Info</h5>
              <div className="footer-contact-item hover">
              <FaEnvelope className="footer-icon" />
              <span>aviligondayugendra18@gmail.com</span>
            </div>
            
           <div className="footer-contact-item hover">
  <FaPhoneAlt className="footer-icon" />
  <a href="tel:+919347472939" className="footer-phone">
    +91 93474-72939
  </a>
</div>

          
            <div className="footer-contact-item hover">
                 <a href="https://linkedin.com/in/aviligonda-yugendra-kumar-183588312" className="link" target="_blank" rel="noopener noreferrer">
                               <FaLinkedin className="footer-icon" />
  LinkedIn Profile</a>

            </div>
            <div className="footer-contact-item hover">
             <a href="https://github.com/yugendra503" className="link" target="_blank" rel="noopener noreferrer">
                             <FaGithub className="footer-icon" />
        GitHub Profile</a>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="text-center footer-bottom">
          <p>
            © {new Date().getFullYear()} <span>Aviligonda Yugendra Kumar</span> — Built with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
