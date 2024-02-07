import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../classObject/portfolio/objetPortfolio";
import VideoPlayer from "../components/video/videoPlayer";
import CloseIcon from "@mui/icons-material/Close";
import { green } from "@mui/material/colors";
import Blackwhite from "../components/common/blackwhite";
import { OutlinedButtons } from "../components/common/button/button";
import { FiberManualRecord } from "@mui/icons-material";

const DetailPage = ({ project, onClose }) => {
  const { id } = useParams();
  // console.log("ID from URL:", id);
  const numericId = parseInt(id, 10);
  // console.log("Numeric ID:", numericId);
  const selectedItem = projects.find((item) => item.id == numericId);
  // console.log("Selected Item:", selectedItem);

  //au l'image dans la div

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(null);

  useEffect(() => {
    // Réinitialiser l'index de l'image lorsque le composant est monté
    setCurrentImageIndex(0);
    setCurrentVideoSrc(null);
  }, [project]);

  const handleThumbnailClick = (index) => {
    if (index === 3) {
      setCurrentVideoSrc(project.video);
      setCurrentImageIndex(null);
    } else {
      setCurrentImageIndex(index);
      setCurrentVideoSrc(null); // Réinitialiser la source de la vidéo lorsqu'une image est cliquée
    }
  };

  return (
    <div className="lg:w-3/4 max-lg:hidden z-20  xl:flex ">
      {project ? (
        <div className="w-full h-full relative  flex flex-col items-center justify-center">
          <div className=" relative overflow-hidden rounded-xl 2xl:h-96 lg:h-60 w-full max-sm:h-40  p-6 mb-2 ">
             <button
              className="close-btn absolute top-0 z-100 right-1 p-1 rounded-3xl bg-red-300 opacity-100 hover:bg-red-400"
              onClick={onClose}
            >
              <CloseIcon fontSize="medium" color="disabled"/>
            </button> 
            {project.imageSrc.length > 1 ? (
              <img
                className={`object-cover p-2  h-full w-full ${
                  currentVideoSrc ? "hidden absolute" : ""
                } `}
                src={project.imageSrc[currentImageIndex]}
                // alt={project.titre}
              />
            ) : (
              <img
                className="object-cover h-full w-full"
                src={project.imageSrc[0]}
                alt={project.titre}
              />
            )}

            {currentVideoSrc && (
              <div className=" ">
                <VideoPlayer videoSrc={currentVideoSrc} />
              </div>
            )}
          </div>
          {project.imageSrc.length > 1 ? (
            <div className="flex justify-between imageListe ml-0 h-20   max-sm:flex-wrap   overflow-hidden  border-red-600 w-full ">
              {project.imageSrc.map((image, index) => (
                <div
                  key={index}
                  className=" w-52 h-52 "
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image}
                    alt={`${project.titre}-image : ${index}`}
                    className={
                      currentImageIndex === index
                        ? "opacity-50 bg-slate-100 w-full h-full p-1 object-cover"
                        : "h-full w-full p-1 object-cover"
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className=" flex flex-col mt-5 w-full imageListe space-y-5 items-start justify-start ">
            <div className="w-full flex max-sm:flex-col">
              <div className=" w-1/3  flex flex-col ">
                <h2 className=" lg:text-2xl">{project.titre}</h2>
                
              </div>
              <div className="w-2/3 2xl:pl10 lg:pl-4 ">
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
            <div className="flex space-x-4 w-full justify-end">


                    {project.lienCode ? (
              <div className=" border hover:bg-slate-900 hover:rounded hover:bg-opacity-50">
                      <OutlinedButtons
                        text="voir le code"
                        sx={{ color: "wheat" }}
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
                      sx={{ color: "wheat" }}
                      href={project.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></OutlinedButtons>
                  </div>

            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DetailPage;
