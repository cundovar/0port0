import React from "react";
import H3Titre from "../h3titre";

const DebutLeft = () => {
  const competences = [
    "reponsive design",
    "Model Vue Controller",
    "StoryBook",
    "composants réutilisables",
  ];

  return (
    <article className="w-5/12  max-lg:mt-3  max-lg:w-full  ">
      <H3Titre titre="compétences en développement web"/>
     
      <div className="flex items-center justify-center  max-lg:h-auto h-3/4">
        <div className="space-y-3 w-3/4 max-lg:w-full  flex  flex-col justify-center m-auto">
          {competences.map((compe, index) => (
            <div key={index} className="flex  items-center">
              <div className="w-1/12 h-5 mr-2  flex items-center justify-center">
                <img
                  className="h-full w-full object-contain"
                  src="./images/cv/svg/svg.svg"
                  alt={`svg-${index}`}
                />
              </div>
              <div className="w-11/12 h-8  flex items-center">
                <p className="text-2xl">{compe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DebutLeft;
