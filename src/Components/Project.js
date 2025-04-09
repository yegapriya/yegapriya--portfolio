import React, { useState } from "react";

import Navbar from "./Naavbar.js";
import "../style/Project.css";
import krypto from "../project-1.png";
import lengthconvertor from "../project-2.png";
import usercreator from "../usercreator.png";
import login from "../login-page.png";
import signin from "../signin-page.png";
import calculator from "../rate-calculator.png";
import { IoIosLink } from "react-icons/io";

import Footer from "./Footer.js";



const projects = [
  {
    title: "KRYPTO",
    description: " Design page Using HTML And CSS.",
    image: krypto,
    type: "Design",
    link: "https://yegapriya.github.io/kryptoofile/",
  },
  {
    title: "INCH CONVERTOR",
    description: "Length to Inch convertor using HTML, CSS, JS.",
    image: lengthconvertor,
    type: "Website",
    link: "#",
  },
  {
    title: "SIGNIN PAGE",
    description: "A Complete Signin Form Using MERN Stack.",
    image: signin,
    type: "Backend",
    link: "#",
  },
  {
    title: "LOGIN PAGE",
    description: "A Complete Signin Form Using MERN Stack.",
    image: login,
    type: "Backend",
    link: "#",
  },
  {
    title: "RATE CALCULATOR",
    description: "Rate Calculator Using HTML, CSS, and JavaScript.",
    image: calculator,
    type: "Website",
    link: "#",
  },
  {
    title: "USER CREATOR PAGE",
    description: " A user creator page using REACTJS.",
    image: usercreator,
    type: "Design",
    link: "#",
  },
];

const Project = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" 
    || project.type === filter
  );

  return (
    <>
      <Navbar page={"project"} />
      <div className="projects">
      <div className="center-project">
          <h2>Project</h2>
          <div className="underline-project"></div>
          <p>My Portfolio Gallery...!</p>
        </div>
      
        
          <div className="project-links">
            <a className={filter === "All" ? " link-style project-menu-active" : "link-style"} onClick={() => setFilter("All")}>All</a>
            <a  className={filter === "Website" ? " link-style project-menu-active" : "link-style"}  onClick={() => setFilter("Website")}>Website</a>
            <a  className={filter === "Design" ? " link-style project-menu-active" : "link-style"}  onClick={() => setFilter("Design")}>Design</a>
            <a  className={filter === "Backend" ? " link-style project-menu-active" : "link-style"}  onClick={() => setFilter("Backend")}>Backend</a>
          </div>
          <div className="project-items">
            
            {filteredProjects.map((project, index) => (
              <div className="project-item">
              <div className="project-image" key={index}>
                <img src={project.image} alt={project.title} />
                
                <div className="slide">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>
                    <IoIosLink 
                    icon={IoIosLink } className="icons" />
                  </a>
                </div>
                </div>
              </div>
            ))}
          
        
      </div>
       <Footer/>
       </div>
    </>
  );
};

export default Project;
