import React from "react";
import "../style/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./Naavbar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div>
      <Navbar page={"contact"}></Navbar>
      <div className="contact-content">
      <div className="center-contact">
          <h2>Contact</h2>
          <div className="underline-contact"></div>
          <p></p>
        </div>
       <div className="contact-details">
        <div className="contact-container1">
          <div className="container-row">
          <FaLocationDot className="detail-icon"/>
          <h4>Address</h4>
            <p className="container-deatils">No:17, Lenin Street, Pondicherry </p>
          </div>
          <div className="container-row">
          <IoIosCall className="detail-icon"/>
          <h4>Contact Number</h4>
            <p className="container-details">+91 6385513406</p>
          </div>
          <div className="container-row">
          < MdEmail className="detail-icon"/>
            <h4>Email</h4>
            <p className="container-details">priya112603@gmail.com</p>
          </div>
        </div>
        <div className="contact-container2">
          <div className="container-row">
          <ImGithub className="detail-icon" />
          <h4>Github</h4>
           <a href="https://github.com/yegapriya">Yegapriya</a> 
          </div>
          <div className="container-row">
          <  FaInstagramSquare className="detail-icon"/>
          <h4>Instagram</h4>
          <a href="https://www.instagram.com/_.p.r.i.y.a._26/"  >
            _.p.r.i.y.a._26
          </a>
          </div>
          <div className="container-row">
          <FaLinkedin   className="detail-icon"/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/yega-priya-v-64a90a288">
            Yegapriya.v
          </a>
          </div>
        </div>
       </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
