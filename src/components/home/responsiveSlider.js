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
        <div className=" relative  mt-10  w-11/12 max-sm:w-full m-auto  ">

<div className=" overflow-hidden   border-red-600 ">
<Slider {...settings} ref={sliderRef}>
<img className="  h-52 object-cover " src="./images/design-crea/Crea1.PNG" alt=""/>
<img className=" h-52 object-cover  " src="./images/design-crea/Crea2.PNG" alt=""/>
<img className=" h-52 object-cover  " src="./images/portfolio/space/space1.PNG" alt=""/>
<img className=" h-52 object-cover  " src="./images/portfolio/magi/magi0.PNG" alt=""/>
</Slider>
</div>


     
        
        </div>
    )
}

export default ResponsiveSlider