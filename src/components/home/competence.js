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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

  const Text=({item})=>{
    return(
    <div className="flex w-full  items-start ">
    <div className="opacity-75" >
    <FiberManualRecord fontSize="small"/>
    </div>
  <p className="text-xl flex items-start ml-1">  {item}</p>
  </div>

    )
  }

  return (
    <>
      <div className="flex w-full  xl:z-50  xl:mb-32 2xl:mb-0 border-orange-700  flex-col xl:p-20 xl:pt-0  max-md:ml-1   items-center justify-center">

      
        <div className=" w-full xl:p-10  ">
        <div className=" w-full flex justify-center   ">
      
          <div className="w-full h-full    ">
            
        
            <div className=" w-full">
         
              <div className="relative w-5/6 lg:w-full m-auto">
              
                <button className="absolute h-10 max-sm:h-5 max-sm:w-5 text-xl xl:z-50 w-10 hover:border  text-slate-950 hover:border-stone-500 transition  ease-in-out delay-100   rounded-full bg-stone-100 flex items-center justify-center -left-0 max-lg:-left-4 -translate-x-2/4 -translate-y-2/4 top-1/2 hover:bg-stone-300   "
                onClick={prevSlide}>
                <FontAwesomeIcon className="text-3xl max-sm:text-xl" icon={faAngleLeft} />

                </button>
                <button className="absolute h-10 w-10 max-sm:h-5 max-sm:w-5 xl:z-50 button_slide hover:border text-slate-950 hover:border-stone-500 transition  ease-in-out delay-100   rounded-full bg-stone-100 flex items-center justify-center -right-0  translate-x-2/4 -translate-y-2/4 top-1/2 z-50 max-lg:-right-4  "
                  onClick={nextSlide} >
               

                <FontAwesomeIcon className="text-3xl max-sm:text-xl" icon={faAngleRight} />
                </button> 
                <Slider {...settings} ref={sliderRef} className=" m-auto w-full ">
                  {tekno &&
                    tekno.map((items) => (
                      <div
                        key={items.id}
                        className=" w-full  min-h-full    border-emerald-500 space-y-5   "
                      >
                        <div className=" bg-gradient-to-r from-cyan-600 p-1 rounded-lg ">
                        <p className="text-xl ml-1">   {items.titre}</p>

                        </div>
                        <div className=" lg:ml-16  flex flex-col items-center justify-center">
                          <div>
                         
                        <Text item={items.l1}/>
                        <Text item={items.l2}/>
                        <Text item={items.l3}/>
                        <Text item={items.l4}/>
                        <Text item={items.l5}/>
                        <Text item={items.l6}/>
                      
                       

                          </div>

                   
                      </div>

                        </div>
                    ))}
                </Slider>
              </div>
      

            </div>
         

          </div>
        </div>

 
      </div>


        </div>
    </>
  );
};

export default Competence;
