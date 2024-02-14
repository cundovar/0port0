import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import Slider from "react-slick";



const ResponsiveSlider=()=>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        autoplay:true,
      };
      const sliderRef = useRef();
    
      const nextSlider = () => {
        sliderRef.current.slickNext();
      };
    
      const prevSlider = () => {
        sliderRef.current.slickPrev();
      };
    

    return(
        <div className=" relative  mt-10 border w-11/12 m-auto  ">
<div className="w-full flex justify-between">

<button className="absolute hover:border text-slate-950 -translate-y-2/4 top-1/2 hover:border-stone-500 transition  ease-in-out delay-100 h-10 w-10   rounded-full bg-stone-100 flex items-center justify-center z-40"
                onClick={prevSlider}>
                <FontAwesomeIcon className="text-3xl" icon={faAngleLeft} />

                </button>
  <button className="hover:border absolute right-0 -translate-y-2/4 top-1/2  text-slate-950 hover:border-stone-500 transition  ease-in-out delay-100 h-10 w-10   rounded-full bg-stone-100 flex items-center justify-center z-40 "
                  onClick={nextSlider} >
               

                <FontAwesomeIcon className="text-3xl" icon={faAngleRight} />
                </button>
</div>
<div className=" overflow-hidden   border-red-600 ">
<Slider {...settings} ref={sliderRef}>
<img className="  h-52 " src="./images/design-crea/crea1.PNG" alt=""/>
<img className=" h-52  " src="./images/design-crea/crea2.PNG" alt=""/>
<img className=" h-52  " src="./images/portfolio/space/space1.PNG" alt=""/>
<img className=" h-52  " src="./images/portfolio/magi/magi0.PNG" alt=""/>
</Slider>
</div>


     
        
        </div>
    )
}

export default ResponsiveSlider