import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio";
import Navbar from "../components/common/navbar";
import Home from "./home";
import Contact from "./contact";
import AnimationSVG from "../components/animation/animationHome";
import DetailPage from "./detaiPage";
import Blackwhite from "../components/common/blackwhite";
import Competence from "../components/home/competence";
import CardCrea1 from "../components/cardCrea/cardCrea";


const Page = () => {
  return (
    
    <Router>
        <div
        
        className="h-full border relative flex border-stone-600 overflow-hidden ">
         

      
    
             <AnimationSVG/>
           
            <Navbar/>

             
<div className=" w-11/12 absolute h-full right-0 ">
        <div className="w-full h-full flex  relative ">
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/portfolio" element={<Portfolio />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/portfolio/detail/:id" element={<DetailPage />}  />
        <Route path="/portfolio/compétence" element={<Competence />}  />
        <Route path="/portfolio/crea" element={<CardCrea1 />}  />
      </Routes>

        </div>

</div>
      </div>
    </Router>
  );
};

export default Page;
