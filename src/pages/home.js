import React, { useEffect, useState } from "react";
import Presentation from "../components/home/presentation";
import Competence from "../components/home/competence";
import CardCrea1 from "../components/cardCrea/cardCrea";
import { ProgressBar } from "../components/home/graphique";
import { CSSTransition } from "react-transition-group";
import { OutlinedButtons } from "../components/common/button/button";
import ResponsiveSlider from "../components/home/responsiveSlider";
import LoadingPage from "../components/animation/loadingpage";
import TipeWriter from "../utils/typeWriter";
import CarouselPresentation from "../components/home/carouselPresentation";
import Grid from "../components/home/grid";
import TitrePage from "../components/common/titrePage.js/TitrePage";

const Home = () => {
  const [isVisible, setIsvisible] = useState(false);

  const t = () => {
    setIsvisible((preVisble) => !preVisble);

    
  };
  const Titre=({titre})=>{
    return(
      <div className={`w-full border-b   ${titre === "Compétences" ? "xl:hidden" :""  } `}>
      <h1 className="text-3xl">{titre} </h1>
    </div>
    )
  }

  return (
    <div className=" w-full flex lg:mt-32 xl:mt-20  border-orange-600 max:lg:m-auto max-xl:flex-col  xl:flex-row lg:justify-between max-lg:items-center relative max-xl:mt-10 z-20    ">
      <TitrePage titre="A propos"/>
      <div className=" md:hidden lg:absolute ml-2  flex items-center h-28">
        <div className="  flex items-center justify-center type w-full">
          <h3>
            <TipeWriter text="Artisant du web..." delay={100} />
          </h3>
        </div>
      </div>

      <div className="w-full xl:w-3/5  max-lg:pt-5   lg:h-full xl:flex justify-center items-start 2xl:items-center   justify-start max-md:visible border-blue-700   ">
        <div className=" sm:ml-2 w-full max-lg:mb-10   max-xl:visible xl:hidden ">
         
            <Titre titre="Créations"/>
         
          <ResponsiveSlider />
        </div>
  
          <div className=  "w-full max-lg:mb-10   space-y-10 lg:w-2/3 xl:w-full  lg:mb-10   " >
            <Titre titre="Compétences"/>
              
            <Competence />
          </div>
       
        

    
        </div>

      <div className=" max-xl:pb-20  xl:w-2/5 md:w-2/3  border-orange-900  max-xl:m-auto  xl:overflow-hidden relative  border w-full  ">
     
        <div className="xl:w-full   2xl:mr-0 h-full  max-md:w-full xl:mr-4 mr-0  border-emerald-500 xl:overflow-y-scroll   ">

            <Titre titre="Présentation"/>
       
          <Presentation  />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
