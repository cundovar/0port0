import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef } from "react";


const Modal=({closeModal} )=>{

   
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

        const sliderRef = useRef();

        const nextSlide = () => {
          sliderRef.current.slickNext();
        };
      
        const prevSlide = () => {
          sliderRef.current.slickPrev();
        };

    return(
      
        <div className="modal w-1/3 relative  max-sm:w-full   max-sm:mt-50  max-sm:-left:5">
                <span className="close absolute -top-20 -right-7 p-5  "
                onClick={closeModal}
                >
                 
                
                    <FontAwesomeIcon className="text-4xl hover:bg-stone-300 transition-colors ease-in-out delay-150 hover:text-orange-500 p-2 rounded-full h-10 w-10" icon={faXmark} style={{color: "#ffffff",}}  />

                </span>
                <div>
            <div className="modal-content relative">
                <Slider {...settings}  ref={sliderRef}>
                   

                <img className="rounded-2xl " src="/images/crea2/image-product-1.jpg"alt=""/>
                    
        

                <img className="rounded-2xl " src="/images/crea2/image-product-2.jpg"alt=""/>
                   

                <img className="rounded-2xl " src="/images/crea2/image-product-3.jpg"alt=""/>
                
                   

                <img className="rounded-2xl " src="/images/crea2/image-product-4.jpg"alt=""/>
                 
                </Slider>
                </div>
                <button className="absolute h-24 w-24 hover:border hover:border-stone-500 transition  ease-in-out delay-100   rounded-full bg-stone-100 flex items-center justify-center -left-0 -translate-x-2/4 -translate-y-2/4 top-1/2 hover:bg-stone-300   max-sm:hidden "
                onClick={prevSlide}>
                <FontAwesomeIcon className="text-5xl" icon={faAngleRight} rotation={180}  />
                </button>
                <button className="absolute  h-24 w-24 transition  ease-in-out delay-100  hover:border hover:border-stone-500 hover:bg-stone-300  rounded-full bg-stone-100 flex items-center justify-center -right-0 translate-x-2/4 -translate-y-2/4 top-1/2 max-sm:hidden"
                onClick={nextSlide}>

                <FontAwesomeIcon className="text-5xl" icon={faAngleRight}   />
                </button>

            </div>
        </div>
      
    )
}

export default Modal