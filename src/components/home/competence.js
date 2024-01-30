import React, { useRef, useState } from "react";
import tekno from "../../classObject/tekno/objectTekno";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonNavBar } from "../common/button/button";
import { ProgressBar } from "./graphique";
import { CSSTransition } from "react-transition-group";
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
      <div className="flex w-full  flex-col    items-center justify-center">
        
        <div className=" w-full mb-5 ">
          <ul className="flex space-x-5 border-b w-2/4">
            <li>
              <ButtonNavBar
                text="technologies"
                onClick={() => setActiveMenuItem("technologies")}
                isActive={activeMenuItem === "technologies"}
              />{" "}
            </li>
            <li>
              <ButtonNavBar
                text="graphique"
                onClick={() => setActiveMenuItem("graphique")}
                isActive={activeMenuItem === "graphique"}
              />{" "}
            </li>
          </ul>
        </div>
        <div className=" w-full h-96 border">
        <div className=" w-full flex justify-center  ">
      
          <div className="w-3/4 h-full      ">
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
            <div>
            {activeMenuItem === "technologies" && (
              <div className="relative">
                <div className=" bg-slate-400 absolute right-0 z-50 top-0">
                  <ButtonNavBar onClick={nextSlide} text="suivant" />
                </div>

                <Slider {...settings} ref={sliderRef} className=" m-auto ">
                  {tekno &&
                    tekno.map((items) => (
                      <div
                        key={items.id}
                        className="  min-h-full backdrop-blur-xl h-1/2  space-y-5   "
                      >
                        <p className="text-xl">{items.titre}</p>
                        <p className="text-xl">{items.l1}</p>
                        <p className="text-xl">{items.l2}</p>
                        <p className="text-xl">{items.l3}</p>
                        <p className="text-xl">{items.l4}</p>
                        <p className="text-xl">{items.l5}</p>
                        <p className="text-xl">{items.l6}</p>
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
<div>
      {activeMenuItem === "graphique" && (
        <div>
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
