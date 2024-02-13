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
import LoadingPage from "../components/animation/loadingpage";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Button from '@mui/material/Button';

const Page = () => {
  return (
    
    <Router>
        <div className="h-full border w-full  max-2xl:border-0   relative flex border-stone-600 overflow-hidden ">
      
         <div className="lg:visible max-lg:invisible ">


<LoadingPage/>

         </div>
        
    
             <AnimationSVG/>
           
            <Navbar/>

             
<div className="  w-11/12  max-md:w-full absolute h-full right-0 ">
        <div className="w-full h-full flex justify-center   relative ">
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/portfolio" element={<Portfolio />}  />
        <Route path="/contact" element={<Contact />}  />
   
       
        <Route path="/portfolio/crea" element={<CardCrea1 />}  />
      </Routes>

        </div>

</div>
      </div>
    </Router>
  );
};

export default Page;
