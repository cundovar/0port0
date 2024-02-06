import React, { useRef, useState } from "react";
import tekno from "../../classObject/tekno/objectTekno";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonNavBar } from "../common/button/button";
import { ProgressBar } from "./graphique";
import { CSSTransition } from "react-transition-group";
import { Icon } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
const Competence = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("technologies");
  const handleClick = () => {
    console.log("testtt");
    setIsActive(!isActive);
  };
  // const closeActiveItem = () => {
  //   setSelectedProject(null);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };

  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="flex w-full border border-orange-700 flex-col xl:p-20 2xl:w-3/4  m-auto max-md:ml-1   items-center justify-center">
     fertret
        <div className=" w-full max-md:ml-1   mb-5 ">
          <ul className="flex space-x-5 xl:border-b w-2/4 max-md:w-full">
            <li>
              <ButtonNavBar
                text="technologies"
                onClick={() => setActiveMenuItem("technologies")}
                isActive={activeMenuItem === "technologies"}
              />{" "}
            </li>
            <li className="max-md:invisible">
              <ButtonNavBar
                text="graphique"
                onClick={() => setActiveMenuItem("graphique")}
                isActive={activeMenuItem === "graphique"}
             
              />{" "}
            </li>
          </ul>
        </div>
        <div className=" w-full xl:p-10 h-96 ">
        <div className=" w-full flex justify-center  ">
      
          <div className="w-full h-full      ">
          <CSSTransition
            in={activeMenuItem === "technologies"}
            timeout={5000}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
              exit: "fade-exit",
              exitActive: "fade-exit-active",
            }}
            unmountOnExit
          >
            <div className="border w-full">
            {activeMenuItem === "technologies" && (
              <div className="relative">
                <div className=" bg-slate-400 absolute right-0 z-50 top-0">
                  <ButtonNavBar onClick={nextSlide} text="suivant" />
                </div>

                <Slider {...settings} ref={sliderRef} className=" m-auto w-full ">
                  {tekno &&
                    tekno.map((items) => (
                      <div
                        key={items.id}
                        className=" w-full  min-h-full   border-emerald-500 space-y-5   "
                      >
                        <p className="text-xl">   {items.titre}</p>
                        <p className="text-xl"><FiberManualRecord fontSize="small"/>  {items.l1}</p>
                        <p className="text-xl"><FiberManualRecord fontSize="small"/>  {items.l2}</p>
                        <p className="text-xl"><FiberManualRecord fontSize="small"/>  {items.l3}</p>
                        <p className="text-xl"><FiberManualRecord fontSize="small"/>  {items.l4}</p>
                        <p className="text-xl"><FiberManualRecord fontSize="small"/>  {items.l5}</p>
                        <p className="text-xl"><FiberManualRecord fontSize="small"/>  {items.l6}</p>
                      </div>
                    ))}
                </Slider>
              </div>
            )}

            </div>
          </CSSTransition>

          </div>
        </div>

        <CSSTransition
            in={activeMenuItem === "graphique"}
            timeout={5000}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
              exit: "fade-exit",
              exitActive: "fade-exit-active",
            }}
            unmountOnExit
          >
<div className="max-md:invisible">
      {activeMenuItem === "graphique" && (
        <div className="">
          <ProgressBar />
        </div>
      )}

</div>
</CSSTransition>
      </div>


        </div>
    </>
  );
};

export default Competence;
