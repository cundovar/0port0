import React, { useRef } from "react";
import Slider from "react-slick";



const ModalDetailpage=({onClose, project})=>{
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

      let modalContent = null;

      if (project) {
        if (project.imageSrc.length > 1) {
          modalContent = (
            <>
             <div className="max-md:visible bg-black z-20 w-full mt-40 h-96 absolute">
              <span onClick={onClose}>close</span>
              <Slider {...settings} ref={sliderRef}>
                {project.imageSrc.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={project.titre} />
                  </div>
                ))}
              </Slider>
              <button onClick={prevSlide}>back</button>
              <button onClick={nextSlide}>next</button>
              </div>
            </>
          );
        } else {
          modalContent = (
            <> <div className="max-md:visible bg-black z-20 w-full mt-40 h-96 absolute">
              <span onClick={onClose}>close</span>
              <img src={project.imageSrc[0]} alt={project.titre} />
              <p>{project.titre}</p>
              </div>
            </>
          );
        }
      }
    
      return ( 
        <>
        {modalContent}
        </>
        ) 
    };
export default ModalDetailpage