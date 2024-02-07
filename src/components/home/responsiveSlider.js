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
      };
      const sliderRef = useRef();
    
      const nextSlider = () => {
        sliderRef.current.slickNext();
      };
    
      const prevSlider = () => {
        sliderRef.current.slickPrev();
      };
    

    return(
        <div className=" relative mt-10  w-full h-full ">

<div className=" w-full  h-52  overflow-hidden border-red-600 ">
<Slider {...settings} ref={sliderRef}>
<img className="  w-full object-cover h-62 " src="./images/design-crea/crea1.PNG" alt=""/>
<img className=" w-full object-cover h-62 " src="./images/design-crea/crea2.PNG" alt=""/>
<img className=" w-full object-cover h-62 " src="./images/portfolio/space/space1.PNG" alt=""/>
<img className=" w-full object-cover h-62 " src="./images/portfolio/magi/magi0.PNG" alt=""/>
</Slider>
</div>


        <button
                          className=" rounded-3xl  flex intems-center absolute right-0 top-0 justify-center xl:p-3 max-sm:p-4  2xl:p-10 hover:bg-stone-400 cursor-pointer"
                          onClick={prevSlider}
                        >
                         ege
                        </button>

                        <button
                          className=" rounded-3xl  flex intems-center absolute left-0 top-14 justify-center xl:p-3 max-sm:p-4  2xl:p-10 hover:bg-stone-400 cursor-pointer"
                          onClick={nextSlider}
                        >gerg
                        </button>
        
        </div>
    )
}

export default ResponsiveSlider