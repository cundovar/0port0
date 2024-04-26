import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./portfolio";
import Navbar from "../components/common/navbar";
import Home from "./home";
import Contact from "./contact";
import AnimationSVG from "../components/animation/animationHome";

import CardCrea1 from "../components/cardCrea/cardCrea";
import LoadingPage from "../components/animation/loadingpage";


import Accueil from "./accueil";
import Cv from "./cv";
import Pdf from "../components/cv/pdf/pdf";

const Page = () => {

  const location = useLocation();

  return (
    
  
        <div className="h-full border w-full  max-2xl:border-0   relative flex border-stone-600 overflow-hidden ">
   
         <div className="lg:visible max-lg:invisible ">


<LoadingPage/>

         </div>
        
    
             <AnimationSVG/>
           
            <Navbar/>

             
<div className="  w-11/12 max-sm:mt-10  max-md:w-full absolute h-full right-0 ">

        <div className="w-full h-full flex justify-center   relative ">
      <Routes>
        <Route path="/" element={<Accueil />}  />
        <Route path="/apropos" element={<Home />}  />
        <Route path="/portfolio" element={<Portfolio />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/cv" element={<Cv/>} />
        <Route path="/portfolio/crea" element={<CardCrea1 />}  />
      </Routes>
      {location.pathname === "/cv" && (
              <div className="absolute w-10 flex justify-center logo h-20 z-50 bottom-0 right-3">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            )}

          

        </div>

</div>
     
      </div>
  
  );
};

export default Page;
