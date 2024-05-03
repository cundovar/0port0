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

const Home = () => {
  const [isVisible, setIsvisible] = useState(false);

  const t = () => {
    setIsvisible((preVisble) => !preVisble);
  
  };

  return (
    <div className=" w-full flex lg:mt-32 xl:mt-20   border-orange-600 max:lg:m-auto max-xl:flex-col  xl:flex-row lg:justify-between max-lg:items-center relative max-xl:mt-10 z-20    ">
       <div className="flex lg:space-x-3  xl:hidden xl:space-x-10 items-end p-2 border-b max-sm:mb-5 max-md:w-full max-lg:flex-col ">
          <h1>A propos</h1>
          </div>
      <div className=" md:hidden lg:absolute ml-2  flex items-center h-28">
        <div className="  type w-full">
          <h3>
            <TipeWriter text="Artisant du web..." delay={100} />
          </h3>
        </div>
      </div>

      <div className="w-full xl:w-3/5  max-lg:pt-5   lg:h-full xl:flex   items-center justify-center max-md:visible border-blue-700   ">
        <div className=" sm:ml-2 w-full   max-xl:visible xl:hidden ">
          <div className="w-full border-b ">
            <h1 className="text-3xl">Créations</h1>
          </div>
          <ResponsiveSlider />
        </div>
  
          <div
            className=  "w-full   max-xl:mt-16    m-auto" >
              
            <Competence />
          </div>
       
        

    
        </div>

      <div className=" max-xl:pb-20  xl:w-2/5 md:w-2/3  border-orange-900  max-xl:m-auto  relative  w-full  ">
     
        <div className="xl:w-full   2xl:mr-0 h-full  max-md:w-full xl:mr-4 mr-0  border-emerald-500   ">
          <div className="  pb-2 mt-5 border-b   z-50">
            <div className="flex xl:justify-start items-end  space-x-5 ">
              <h1 className="max-md:text-3xl   max-md:ml-2">
                Présentation
              </h1>
             
            </div>
          </div>
          <Presentation />
        </div>
      </div>
    </div>
  );
};

export default Home;
