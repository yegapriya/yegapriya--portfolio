 import React from "react";
 import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
 import "../style/Footer.css";
 
 function Footer() {
    return(
 <div className="footer">
    
    <div className=" footer-container"> 
        <div className="copyright">
            <p> © Copyright
              <strong className="name">YEGAPRIYA</strong>
             <span>All Rights Reversed</span><br/>
            </p>
        </div>
        <div className="footer-icons">
          <a href="/" >
            <FaFacebook className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/_.p.r.i.y.a._26/"  >
            <IoLogoInstagram className="footer-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/yega-priya-v-64a90a288">
            <IoLogoLinkedin className="footer-icon" />
          </a>
          <p className="design">Designed by <span>yegapriya</span></p>
        </div>
       
    </div> 
    </div>
    );
 };
 export default Footer;