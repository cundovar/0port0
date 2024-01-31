import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../classObject/portfolio/objetPortfolio";
import VideoPlayer from "../components/video/videoPlayer";

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
    <div className="">
      {project ? (
        <div className="w-full h-full space-x-5 flex flex-col items-center justify-center">
          <div className=" relative overflow-hidden  xl:h-96 lg:h-60 w-full ">
            <button
              className="close-btn absolute top-3 right-3 rounded-lg bg-slate-300"
              onClick={onClose}
            >
              close
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
              <div className="">
                <VideoPlayer videoSrc={currentVideoSrc} />
              </div>
            )}
          </div>
          {project.imageSrc.length > 1 ? (
            <div className="flex imageListe ml-0 h-20  overflow-hidden  border-red-600 w-full ">
              {project.imageSrc.map((image, index) => (
                <div
                  key={index}
                  className=" w-1/4 h-full "
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image}
                    alt={`${project.titre}-image : ${index}`}
                    className={
                      currentImageIndex === index
                        ? "opacity-50 bg-slate-100 w-full h-full p-1"
                        : "h-full w-full p-1"
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className=" flex flex-col w-full imageListe space-y-5 items-start justify-start ">
            <div className="w-full flex">
              <div className=" w-1/3 ">
                <h2 className=" lg:text-2xl">{project.titre}</h2>
              </div>
              <div className="w-2/3 pl-10 ">
                {/* <p>{project.tekno}</p> */}
                <p>{project.text1}</p>
                <p>{project.text2}</p>
                <p>{project.text3}</p>
                <p>{project.text4}</p>
              </div>
            </div>
            <div className="flex space-x-5 w-full">
              <button>
                <a
                  href={project.lienCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code
                </a>
              </button>
              <button>
                <a
                  href={project.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                </a>
              </button>
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
