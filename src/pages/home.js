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
    <div className=" w-full flex   border-orange-600  max-md:flex-col lg:flex-col-reverse xl:flex-row  max-lg:items-center relative max-md:mt-36 z-20 max-lg:overflow-y-scroll     ">
      <div className=" md:hidden lg:absolute ml-2  flex items-center h-28">
        <div className="  type w-full">
          <h3>
            <TipeWriter text="Artisant du web..." delay={100} />
          </h3>
        </div>
      </div>

      <div className="w-full   max-lg:pt-5   lg:h-full md:w-2/4 lg:w-2/3 lg:flex   items-center justify-center max-md:visible border-blue-700   ">
        <div className=" ml-2 w-full  max-md:visible md:hidden md:invisible">
          <div className="w-full border-b ">
            <h1 className="text-3xl">Créations</h1>
          </div>
          <ResponsiveSlider />
        </div>
        {isVisible ? (
        <CSSTransition
          in={isVisible}
          timeout={5000}
          classNames={{
            enter: "fade-enter",
            enterActive: "fade-enter-active",
            exit: "fade-exit",
            exitActive: "fade-exit-active",
          }}
          unmountOnExit
          >
          <div
            className={` invisible w-11/12  lg:visible lg:relative absolute lg:w-full  m-auto   ${
              isVisible ? "visible" : "invisible"
            }`}
          >
            <Competence />
          </div>
        </CSSTransition>
          )  :(
            <div className="w-5/6  max-xl:hidden xl:h-1/2 h-full flex justify-center items-center p-10">
         
                
              {/* <CarouselPresentation /> */}

   

              {/* <Grid/> */}

          
             

            </div>
        )}

        <div className="visible lg:hidden relative  mt-10 border-red-700 z-50">
          <div className="w-full md:hidden border-b mb-10 ">
            <h1 className="text-3xl  ">Technologies</h1>
          </div>
          <Competence />
        </div> 
    
        </div>

      <div className=" max-md:ml-2 xl:w-1/3  md:mt-0   border-orange-900  relative  w-full  ">
        <div className="xl:w-full   2xl:mr-0 h-full max-md:w-full xl:mr-4   border-emerald-500   ">
          <div className="  pb-2 mt-10 border-b  z-50">
            <div className="flex xl:justify-start items-end  space-x-5">
              <h1 className="max-md:text-3xl  max-md:ml-2">
                Présentation
              </h1>
              <ul className="flex space-x-5 items-end justify-end w-2/3 ">
                <div className="max-md:invisible md:mr-4 ">
                  <OutlinedButtons
                    onClick={t}
                    sx={{ color: "" }}
                    text={"voir mes compétences"}
                  />
                </div>
              </ul>
            </div>
          </div>
          <Presentation />
        </div>
      </div>
    </div>
  );
};

export default Home;
