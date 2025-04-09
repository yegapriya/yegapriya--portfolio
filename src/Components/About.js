import React from "react";
import Navbar from "./Naavbar.js";
import profile from "../profile.jpg";
import { FaGreaterThan } from "react-icons/fa6";
import Footer from "./Footer.js";
import "../style/About.css";



const About = () => {
  
  return (
    <>
      <Navbar page={"about"}></Navbar>
      <div className="about-content">
        <div className="center-about">
          <h2>About</h2>
          <div className="underline"></div>
          <p>I am a Engineering student learing Fullstack</p>
        </div>

        <div className="about-phase">
          <div className="image">
            <img src={profile} alt="profile" className="profile-pic"></img>
          </div>
          <div className="web-dev">
            <h3>FRONTEND DEVELOPER</h3>
            <p className="content">Detailing About Myself...!</p>
            <div className="my-bio">
              <div className="my-bio1">
                <ul>
                  <li>
                   <icon>
                      <FaGreaterThan />
                   </icon>
                    <strong className="listvalue">Birthday:</strong>
                    <span>26 November 2003</span>
                  </li>
                  
                  <li>
                    <icon>
                      <FaGreaterThan />
                    </icon>
                    <strong>Phone:</strong>
                    <span>+91 6385513406</span>
                  </li>
                  <li>
                    <icon>
                      <FaGreaterThan />
                    </icon>
                    <strong>City:</strong>
                    <span>Pondicherry</span>
                  </li>
                </ul>
              </div>
              <div className="my-bio2">
                <ul>
                  <li>
                    <icon>
                      <FaGreaterThan />
                    </icon>
                    <strong>Age:</strong>
                    <span>20</span>
                  </li>
                  <li>
                    <icon>
                      <FaGreaterThan />
                    </icon>
                    <strong>Degree:</strong>
                    <span>B.Tech-IT</span>
                  </li>
                  <li>
                    <icon>
                      <FaGreaterThan />
                    </icon>
                    <strong>Email:</strong>
                    <span>priya112603@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="official">
              <p>
                Enthusiastic and detail-oriented recent graduate with a Basic
                foundation in front-end web development. Eager to apply my
                skills in HTML, CSS, and JavaScript to build responsive and
                user-friendly web applications. Seeking an entry-level front-end
                developer position to leverage my skills in a collaborative and
                innovative environment.
              </p>
            </div>
         
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;
