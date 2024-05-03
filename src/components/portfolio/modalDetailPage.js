import React, { useRef } from "react";
import Slider from "react-slick";
import { OutlinedButtons } from "../common/button/button";
import { FiberManualRecord } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const ModalDetailpage = ({ onClose, project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    
      modalContent = (
        <>
          <div className="absolute  flex items-center   max-sm:pt-10 sm:pt-20 sm:pb-20 max-sm:h-full max-xl:h-auto   border-pink-500   w-full  max-xl:visible xl:invisible backdrop-blur-xl modal   ">
            <div className="  relative h-auto  m-auto w-11/12   ">
              <button
                className="close-btn absolute right-0 -top-10 z-50 right-0 p-1 rounded-3xl bg-red-300 opacity-100 hover:bg-red-400"
                onClick={onClose}
              >
                <CloseIcon fontSize="medium" color="disabled" />
              </button>

              <div className=" w-full h-1/3  m-auto ">
              {project.imageSrc.length >1 ?(
                <Slider {...settings} ref={sliderRef}>
                  {project.imageSrc.map((image, index) => (
                    <div key={index} className=" bg-stone-900 overflow-hidden">
                      
                      <img
                        className=" h-52 object-contain m-auto"
                        src={image}
                        alt={project.titre}
                      />
                    </div>
                  ))}
                </Slider>
              ):(
                <img
                className=" h-52 m-auto "
                src={project.imageSrc[0]}
                alt={project.titre}
              />
  
              )}
              </div>

           



              <div className="w-full h-2/3    m-auto">
                <div className=" flex flex-col mt-5 w-full imageListe space-y-5  bg-opacity-50 bg-slate-700 p-1 pb-3 m-4 items-start justify-start ">
                  <div className="w-full flex max-lg:flex-col  ">
                    <div className=" w-full  flex flex-col ">
                      <h2 className=" lg:text-xl text-lg mb-5">
                        {project.titre}
                      </h2>
                    </div>
                    <div className=" 2xl:pl10 lg:pl-4 ">
                      {/* <p>{project.tekno}</p> */}
                      <div className="flex w-full items-start ">
                        <div className="  ">
                          <FiberManualRecord fontSize="small  " />
                        </div>
                        <p className="flex items-start">{project.text1}</p>
                      </div>
                      <div className="flex w-full items-start ">
                        <div className="  ">
                          <FiberManualRecord fontSize="small " />
                        </div>
                        <p className="flex items-start">{project.text2}</p>
                      </div>
                      {project.text3 ? (
                        <div className="flex w-full items-start ">
                          <div className="  ">
                            <FiberManualRecord fontSize="small  " />
                          </div>
                          <p className="flex items-start">{project.text3}</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {project.text4 ? (
                        <div className="flex w-full items-start ">
                          <div className="  ">
                            <FiberManualRecord fontSize="small  " />
                          </div>
                          <p className="flex items-start">{project.text4}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-4 w-full justify-end max-sm:justify-center">
                    {project.lienCode ? (
                      <div className=" border hover:bg-slate-900 hover:rounded hover:bg-opacity-50">
                        <OutlinedButtons
                          text="voir le code"
                          sx={{ color: "" }}
                          href={project.lienCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></OutlinedButtons>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className=" border hover:bg-slate-900 hover:rounded hover:bg-opacity-50">
                      <OutlinedButtons
                        text="voir le site"
                        sx={{ color: "" }}
                        href={project.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></OutlinedButtons>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </>
      )
    }
  return <>{modalContent}</>;
};
export default ModalDetailpage
