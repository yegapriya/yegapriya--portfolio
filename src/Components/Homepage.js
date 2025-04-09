import React from "react";
import '../style/Homepage.css'
import Footer from "./Footer" 
import Navbar from "./Naavbar";

  const  Home = () => {
   
    return(
      <>
        <div className="home-contant">
          < Navbar page={"home"} />
         
          
    <div className="home-page-center">
        <h2>Yegapriya</h2>
        <p className="dev">I Am a FullStack Developer</p>
        <a href="/About" className="aboutpage">ABOUT</a>
    </div>
    
      

  
    
        
     

        </div>
      
        <Footer/>
        </>
    )
 }; 
  export default Home;