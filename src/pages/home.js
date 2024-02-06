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
    <div className=" w-full flex  max-md:flex-col  max-lg:items-center relative max-md:mt-36 z-20 max-lg:overflow-y-scroll    ">
      
      <div className="h-96 w-full hidden max-md:visible border lg:invisible">
        <div>fzetrzet</div>
        <div>fzetrzet</div>
        <div>fzetrzet</div>
        <div>fzetrzet</div>
        <div>fzetrzet</div>
      </div>


      <div className="w-full max-lg:pt-20 h-1/3  max-lg:h-1/2 lg:h-full md:w-1/3 lg:w-2/3 lg:flex   items-center justify-center max-md:visible   border-blue-700   ">
        retert
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
            className={` invisible lg:visible lg:relative absolute lg:w-full  m-auto   ${
              isVisible ? "visible" : "invisible"
            }`}
          >
            <Competence />
          </div>
        </CSSTransition>

             
        <div className="sm:visible lg:hidden pb-40    border-red-700 z-50">

          <Competence />
        </div>
        
      </div>



      <div className=" xl:w-1/3 mt-40 md:mt-0  border-orange-900  relative  w-full  ">
        <div className="xl:w-full   2xl:mr-0 h-full max-md:w-full   border-emerald-500   ">
          <div className="  pb-2 mt-10 border-b  z-50">
            <div className="flex xl:justify-start items-end  space-x-5">
              <h1 className="max-md:text-3xl">accueil</h1>
              <ul className="flex space-x-5 items-end justify-end w-2/3 ">
                <div className="max-md:invisible">
                  <OutlinedButtons
                    onClick={t}
                    sx={{ color: "wheat" }}
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
