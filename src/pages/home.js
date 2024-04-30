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
    <div className=" w-full flex    border-orange-600 max:lg:m-auto max-md:flex-col md:flex-col-reverse xl:flex-row lg:justify-between max-lg:items-center relative max-xl:mt-20 z-20    ">
      <div className=" md:hidden lg:absolute ml-2  flex items-center h-28">
        <div className="  type w-full">
          <h3>
            <TipeWriter text="Artisant du web..." delay={100} />
          </h3>
        </div>
      </div>

      <div className="w-full xl:w-3/5  max-lg:pt-5   lg:h-full md:w-2/4 lg:w-2/3 lg:flex   items-center justify-center max-md:visible border-blue-700   ">
        <div className=" ml-2 w-full  max-md:visible md:hidden md:invisible">
          <div className="w-full border-b ">
            <h1 className="text-3xl">Créations</h1>
          </div>
          <ResponsiveSlider />
        </div>
  
          <div
            className=  "w-full   max-sm:mt-5 max-sm:w-full border   m-auto" >
            <Competence />
          </div>
       
        

    
        </div>

      <div className=" max-md:ml-2 xl:w-2/5 md:w-2/3  md:mt-0 border-orange-900  max-xl:m-auto  relative  w-full  ">
        <div className="xl:w-full   2xl:mr-0 h-full  max-md:w-full xl:mr-4 mr-0  border-emerald-500   ">
          <div className="  pb-2 mt-10 border-b   z-50">
            <div className="flex xl:justify-start items-end  space-x-5">
              <h1 className="max-md:text-3xl   max-md:ml-2">
                Présentation
              </h1>
              {/* <ul className="flex space-x-5 items-end justify-end w-2/3 ">
                <div className="max-md:invisible md:mr-4 ">
                  <OutlinedButtons
                    onClick={t}
                    sx={{ color: "" }}
                    text={"voir mes compétences"}
                  />
                </div>
              </ul> */}
            </div>
          </div>
          <Presentation />
        </div>
      </div>
    </div>
  );
};

export default Home;
