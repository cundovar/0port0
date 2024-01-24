import React from "react";
import { useParams } from "react-router-dom";
import projects from "../classObject/portfolio/objetPortfolio";

const DetailPage = ({ project, onClose }) => {
  const { id } = useParams();
  console.log("ID from URL:", id)
  const numericId = parseInt(id, 10);
  console.log("Numeric ID:", numericId);
  const selectedItem = projects.find((item) => item.id == numericId);
  console.log("Selected Item:", selectedItem);

  return (
    <div className="">
      {project ? (
          <div className="w-full h-full space-x-5 flex flex-col items-center justify-center">
            <button className="close-btn" onClick={onClose}>close</button>
          <div className=" pr-6  ">
            <img src={project.imageSrc} alt={project.titre} />
          </div>
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
        <div>Projet non trouvé</div>
      )}
    </div>
  );
};

export default DetailPage;