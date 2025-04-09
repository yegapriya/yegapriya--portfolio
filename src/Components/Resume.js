import React from "react";
import "../style/Resume.css";
import Navbar from "./Naavbar";
import Footer from "./Footer";
const Resume = () => {
  return (
    <div>
      <Navbar page={"resume"}></Navbar>
      <div className="resume-content">
        <div className="resume-center">
         
            <h2>Resume</h2>

            <div className="underline-resume"></div>
            <p>Here is my Resume..!</p>
         
        </div>
        <div className="resume-details">
          <div className="resume-row">
            <div className="resume-container1">
              <div className="sumary">
                <h3 className="resume-title">Sumary</h3>
                <div className="sumary-details">
                  <h4>YEGAPRIYA</h4>
                  <p>
                    <em>
                      Enthusiastic and detail-oriented recent graduate with a
                      Basic foundation in front-end web development. Eager to
                      apply my skills in HTML, CSS, and JavaScript to build
                      responsive and user-friendly web applications. Seeking an
                      entry-level front-end developer position to leverage my
                      skills in a collaborative and innovative environment.
                    </em>
                    <ul>
                      <li>No:17, Velmurugan Nagar, Pondicherry</li>
                      <li>+91 6385513406</li>
                      <li>priya112603@gmail.com</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="education">
                <h3 className="resume-title">Education</h3>
                <div className="education-detail">
                  <h4 className="resume-title">
                    B.Tech (INFORMATION TECHNOLOGY)
                  </h4>
                  <h5>2021-2025</h5>

                  <p>Christ College Of Engineering And Technology</p>
                  <div className="college">
                  <em >
                    I completed my Bachelor of Technology B.Tech in Information
                    Technology from Christ College Of Engineering and
                    Technology, graduating in 2025. During my time at the
                    college, I maintained a CGPA of 8.5+. I was actively
                    involved in several projects . My academic journey at Christ
                    College provided me with a strong foundation in technical
                    skill, which I am eager to apply in my professional career.
                  </em>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-container2">
              <div className="experience">
                <div className="resume-title">Experience</div>
                <div className="experience-detail">
                  <h4>Intern | Fizota Travel Tech</h4>
                  <h5>July 2024 – September 2024</h5>
                  <ul>
                    <li>Developed and optimized user interfaces for web applications using ReactJS, enhancing performance and user experience.</li>
                    <li>Collaborated in an Agile environment with cross-functional teams, contributing to successful sprint completions and project milestones</li>
                    <li>Integrated RESTful APIs for real-time data display in travel booking systems, boosting functionality and responsiveness.
                    </li>
                    <li>Conducted testing and documentation, ensuring high code quality and maintaining detailed records of development processes.
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    
   <Footer/>
    </div>
  );
};
export default Resume;
