import React, { useState } from "react";
import Presentation from "../components/home/presentation";
import Competence from "../components/home/competence";
import CardCrea1 from "../components/cardCrea/cardCrea";
import { ProgressBar } from "../components/home/graphique";
import { CSSTransition } from "react-transition-group";
import { OutlinedButtons } from "../components/common/button/button";

const Home = () => {
  const [isVisible, setIsvisible] = useState(false);
  const t = () => {

    setIsvisible((preVisble) => !preVisble);
  };

  return (
    <div className="flex w-full max-md:flex-col relative max-md:mt-36 z-20 max-md:overflow-y-scroll    ">
      <div className="w-full h-full absolute bg-black z-50 flex justify-center items-center border">
        <h1>test</h1>
      </div>
      <div className="sm:w-full  lg:w-2/3 flex  items-center border justify-center max-md:visible   border-blue-700   h-full ">
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
        <div className={`w-full m-auto overflow-y-scroll max-md:visible   ${isVisible ? "visible" : "invisible"}`}>
          <Competence />
        </div>
        </CSSTransition>
       

      </div>
      <div className=" xl:w-1/3   border-orange-900  relative h-full lg:w-full  ">
       
        <div className="xl:w-full   2xl:mr-0 h-full max-md:w-full  border-emerald-500   ">
       <div className="  pb-2 mt-10 border-b  z-50">
          <div className="flex justify-start items-end  space-x-5">
            <h1 className="max-md:text-3xl">accueil</h1>
            <ul className="flex space-x-5 items-end justify-end w-2/3 ">
              <div className="max-md:invisible">
              <OutlinedButtons onClick={t} sx={{color:"wheat"}} text={"voir mes compétences"}/>

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
