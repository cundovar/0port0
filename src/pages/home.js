import React, { useState } from "react";
import Presentation from "../components/home/presentation";
import Competence from "../components/home/competence";
import CardCrea1 from "../components/cardCrea/cardCrea";
import { ProgressBar } from "../components/home/graphique";
import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [isVisible, setIsvisible] = useState(false);
  const t = () => {
    console.log("Toggle visible clicked");
    setIsvisible((preVisble) => !preVisble);
  };

  return (
    <div className="flex w-full ">
      <div className="w-1/2 flex items-center justify-center border-blue-700   border h-full ">
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
        <div className={`w-full   ${isVisible ? "visible" : "invisible"}`}>
          <Competence />
        </div>
        </CSSTransition>
       

      </div>
      <div className=" w-1/2 border-orange-600 relative h-full ">
        <div className="  pb-2 border-b  z-50">
          <div className="flex justify-start items-end border space-x-5">
            <h2>accueil</h2>
            <ul className="flex space-x-5">
            
              <li onClick={t} className="cursor-pointer">Voir mes competences</li>
              
            </ul>
          </div>
        </div>
       
        <div className="2xl:w-2/3 lg:w-3/4 absolute right-0 mr-10 2xl:mr-0 h-full border-emerald-500   overflow-scroll ">
          <Presentation />
          
        </div>
       
      </div>
    </div>
  );
};

export default Home;
