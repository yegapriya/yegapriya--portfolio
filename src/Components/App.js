import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Homepage';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

import Resume from "./Resume";




function App(){
    return(
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route> 
           <Route  path="/About" element={<About/>}></Route>
           <Route path="/resume" element={<Resume/>}></Route>
            <Route path="/skills" element={<Skill/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
           
            </Routes>
            </BrowserRouter>
    )
} export default App;

  