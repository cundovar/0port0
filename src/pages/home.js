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
    console.log("Toggle visible clicked");
    setIsvisible((preVisble) => !preVisble);
  };

  return (
    <div className="flex w-full ">
      <div className="2xl:w-1/2 xl:w-2/3 flex items-center justify-center border-blue-700   h-full ">
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
        <div className={`w-full m-auto   ${isVisible ? "visible" : "invisible"}`}>
          <Competence />
        </div>
        </CSSTransition>
       

      </div>
      <div className=" 2xl:w-1/2 xl:w-1/3 border-orange-600  relative h-full ">
       
        <div className="2xl:w-2/3 lg:w-full absolute right-0  2xl:mr-0 h-full  border-emerald-500   overflow-scroll ">
       <div className="  pb-2 mt-10 border-b  z-50">
          <div className="flex justify-start items-end  space-x-5">
            <h2>accueil</h2>
            <ul className="flex space-x-5 items-end justify-end w-2/3 ">

              <OutlinedButtons onClick={t} sx={{color:"wheat"}} text={"voir mes compétences"}/>
            
           
              
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
