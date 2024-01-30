import React, { useRef, useState } from "react";
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
  const handleThumbnailClick = (index) => {
  
  
      setCurrentImageIndex(index);

    
  };


  return (
    <div className="">
      {project ? (
        <div className="w-full h-full space-x-5 flex flex-col items-center justify-center">
          <button className="close-btn" onClick={onClose}>
            close
          </button>
          <div className=" overflow-hidden border w-full ">
          {project.imageSrc.length > 1 ? (
        currentImageIndex === 3 ? (
          <VideoPlayer videoSrc={project.video}  />
        ) : (
          <img
            className=" object-cover  w-full"
            src={project.imageSrc[currentImageIndex]}
            alt={project.titre}
          />
        )
      ) : (
        <img
          className=" object-cover w-full"
          src={project.imageSrc[0]}
          alt={project.titre}
        />
      )}

          </div>
            {project.imageSrc.length > 1 ? (
              <div className="flex h-20 border  border-red-600 w-full ">
                {project.imageSrc.map((image, index) => (
                  <div key={index} className="border w-1/4 h-full "
                  onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={image}
                      alt={`${project.titre}-image : ${index}`}
                      className={currentImageIndex === index ? "opacity-50 bg-slate-100" : ""}
                     
                    />
                  </div>
                ))}
           
              </div>
            ) : (
              ""
            )}
          <div className=" flex flex-col space-y-5 items-start justify-start ">
            <h2 className="border-b">{project.titre}</h2>
            <p>{project.tekno}</p>
            <p>{project.text1}</p>
            <p>{project.text2}</p>
            <p>{project.text3}</p>
            <p>{project.text4}</p>
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
