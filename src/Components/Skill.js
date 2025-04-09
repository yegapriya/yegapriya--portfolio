import React from "react";
import "../style/Skill.css";
import Footer from "./Footer";
import Navbar from "./Naavbar";
const Skill = () => {
  return (
    <div>
      <Navbar page={"skills"}></Navbar>
      <div className="skills-content">
        <div className="center-skill">
          <h2>Skills</h2>
          <div className="underline"></div>
          <p></p>
        </div>

        <div className="skill-items">
          <div className="skill-item">
            <span className="title">
              {" "}
              HTML <span className="tooltip">90%</span>
            </span>
            <div className="skill-bar">
              <span className="skill-per html"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="title">
              {" "}
              CSS <span className="tooltip">70%</span>
            </span>
            <div className="skill-bar">
              <span className="skill-per css"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="title">
              {" "}
              JAVASCRIPT <span className="tooltip">40%</span>
            </span>
            <div className="skill-bar">
              <span className="skill-per js"></span>
            </div>
          </div>

          <div className="skill-item">
            <span className="title">
              {" "}
              REACTJS<span className="tooltip">30%</span>
            </span>
            <div className="skill-bar">
              <span className="skill-per react"></span>
            </div>
          </div>

          <div className="skill-item">
            <span className="title">
              {" "}
              PYTHON<span className="tooltip">30%</span>
            </span>
            <div className="skill-bar">
              <span className="skill-per python"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="title">
              {" "}
              NODEJS<span className="tooltip">25%</span>
            </span>
            <div className="skill-bar">
              <span className="skill-per node"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-skill">
        <Footer />
      </div>
    </div>
  );
};
export default Skill;
