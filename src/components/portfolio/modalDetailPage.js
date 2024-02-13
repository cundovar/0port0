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
    if (project.imageSrc.length > 1) {
      modalContent = (
        <>
          <div className="absolute max-md:visible flex justify-center lg:invisible h-full w-full backdrop-blur-xl z-50  ">
            <div className="  relative  lg:w-1/2 w-full  mt-40 h-96 ">
            <button
              className="close-btn  m-2 z-100  p-1 rounded-3xl bg-red-300 opacity-100 hover:bg-red-400"
              onClick={onClose}
            >
              <CloseIcon fontSize="medium" color="disabled"/>
            </button> 
<div className="w-2/3 m-auto">
              <Slider {...settings} ref={sliderRef}>
                {project.imageSrc.map((image, index) => (
                  <div key={index} className="md:h-96 h-32 overflow-hidden">
                    <img className="" src={image} alt={project.titre} />
                  </div>
                    
                ))}
              </Slider>

</div>
            
                    <div  className="">
                      <div className=" flex flex-col mt-5 w-full imageListe space-y-5 border bg-opacity-50 bg-slate-700 p-1 m-4 items-start justify-start ">
                        <div className="w-full flex max-sm:flex-col ">
                          <div className=" w-full  flex flex-col ">
                            <h2 className=" lg:text-2xl">{project.titre}</h2>
                          </div>
                          <div className="w-2/3 2xl:pl10 lg:pl-4 ">
                            {/* <p>{project.tekno}</p> */}
                            <div className="flex w-full items-start ">
                              <div className="  ">
                                <FiberManualRecord fontSize="small  " />
                              </div>
                              <p className="flex items-start">
                                {project.text1}
                              </p>
                            </div>
                            <div className="flex w-full items-start ">
                              <div className="  ">
                                <FiberManualRecord fontSize="small " />
                              </div>
                              <p className="flex items-start">
                                {project.text2}
                              </p>
                            </div>
                            {project.text3 ? (
                              <div className="flex w-full items-start ">
                                <div className="  ">
                                  <FiberManualRecord fontSize="small  " />
                                </div>
                                <p className="flex items-start">
                                  {project.text3}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                            {project.text4 ? (
                              <div className="flex w-full items-start ">
                                <div className="  ">
                                  <FiberManualRecord fontSize="small  " />
                                </div>
                                <p className="flex items-start">
                                  {project.text4}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-4 w-full justify-end">
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
            
              <button onClick={prevSlide}>back</button>
              <button onClick={nextSlide}>next</button>
            </div>
          </div>
        </>
      );
    } else {
      modalContent = (
        <div className="absolute h-full w-full max-md:visible lg:invisible backdrop-blur-xl z-50  ">
          <div className="  bg-black z-20 w-full mt-40 h-96 absolute">
            <span onClick={onClose}>close</span>
            <img src={project.imageSrc[0]} alt={project.titre} />


            <div className=" flex flex-col mt-5 w-full imageListe space-y-5 border bg-opacity-50 bg-slate-700 p-1 m-4 items-start justify-start ">
                        <div className="w-full flex max-sm:flex-col ">
                          <div className=" w-full  flex flex-col ">
                            <h2 className=" lg:text-2xl">{project.titre}</h2>
                          </div>
                          <div className="w-2/3 2xl:pl10 lg:pl-4 ">
                            {/* <p>{project.tekno}</p> */}
                            <div className="flex w-full items-start ">
                              <div className="  ">
                                <FiberManualRecord fontSize="small  " />
                              </div>
                              <p className="flex items-start">
                                {project.text1}
                              </p>
                            </div>
                            <div className="flex w-full items-start ">
                              <div className="  ">
                                <FiberManualRecord fontSize="small " />
                              </div>
                              <p className="flex items-start">
                                {project.text2}
                              </p>
                            </div>
                            {project.text3 ? (
                              <div className="flex w-full items-start ">
                                <div className="  ">
                                  <FiberManualRecord fontSize="small  " />
                                </div>
                                <p className="flex items-start">
                                  {project.text3}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                            {project.text4 ? (
                              <div className="flex w-full items-start ">
                                <div className="  ">
                                  <FiberManualRecord fontSize="small  " />
                                </div>
                                <p className="flex items-start">
                                  {project.text4}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-4 w-full justify-end">
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
      );
    }
  }

  return <>{modalContent}</>;
};
export default ModalDetailpage;
