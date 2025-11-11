// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header shadow-sm">
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <div className="container">
//           <Link className="navbar-brand fw-bold text-info" to="/">
//             <span className="dev-name"> Portfolio </span>
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/projects">Projects</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </li>

//                   {/* <li className="nav-item">
//                 <Link className="nav-link" to="/contactus">Contact Us</Link>
//               </li> */}

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import "./Header.css";
// import yogis from "../assets/yogis.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="  navbar">
    <div className="container p-5 pt-3 pb-3">
        <div className="logo">
        {/* <img src={yogis} alt="Logo" className="logo-img" /> */}
        <span>Yugendra Kumar</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
    </div>
    </header>
  );
}

export default Header;
