import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import pdf  from "./YEGAPRIYA-RES.pdf";
import { FaDownload } from "react-icons/fa";
import { RiDownloadCloudFill } from "react-icons/ri";

const Navbar = (props) => {
  const { page } = props;
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);
  const onButtonClick = () =>{
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "YEGAPRIYA RESUME.pdf";
    link.click();};

  return (
    <div className="Home">
      <div className="navbar">
        <div > <a to="/About" className="column-1">YEGAPRIYA</a></div>
       
        <ul className={`nav-links ${isMobile ? "active" : ""}`}>

          <li className={page === "home" ? "active" : ""}>
            <Link to="/" className={page === "home" ? "active" : "list"} onClick={closeMenu}>Home</Link>
          </li>

          <li className={page === "about" ? "active" : ""}>
            <Link to="/about" className={page === "about" ? "active" : "list"} onClick={closeMenu}>About</Link>
          </li>
          <li className={page === "resume" ? "active" : ""}>
            <Link to="/resume" className={page === "resume" ? "active" : "list"} onClick={closeMenu}>Resume</Link>
          </li>
          <li className={page === "skills" ? "active" : ""}>
            <Link to="/skills" className={page === "skills" ? "active" : "list"} onClick={closeMenu}>Skills</Link>
          </li>
          <li className={page === "project" ? "active" : ""}>
            <Link to="/project" className={page === "project" ? "active" : "list"} onClick={closeMenu}>Project</Link>
          </li>
          <li className={page === "contact" ? "active" : ""}>
            <Link to="/contact" className={page === "contact" ? "active" : "list"} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
        <div className="icons">
          <a href="/" >
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/_.p.r.i.y.a._26/"  >
            <FaSquareInstagram className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/yega-priya-v-64a90a288">
            <FaLinkedin  className="icon"/>
          </a>
          
       
      
        </div>
        
        <div className="mob-menu" onClick={handleClick}>
          {isMobile ? <RxCross2 /> : <CiMenuBurger />}
        </div>
        <div className="download">
        <button className="download-button" onClick={onButtonClick}><FaDownload  className="download-icon"/>Download CV</button>
        
        <button className="cv-button" onClick={onButtonClick}><FaDownload  className="downloadicon"/>CV</button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
