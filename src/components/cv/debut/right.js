import React from "react";
import ComponenentTekno from "../componenetTekno";
import tek from "../milieu/teknoModel/objectTekno";

const DebutRight = () => {
  const image = [
    "./images/cv/logo/api.png",
    "./images/cv/logo/Bootstrap.png",
    "./images/cv/logo/js.png",
    "./images/cv/logo/php.png",
    "./images/cv/logo/React.png",
    "./images/cv/logo/sass.png",
    "./images/cv/logo/tailwind.png",
    "./images/cv/logo/wordpress.png",
    "./images/cv/logo/logo-twig.png",
    "./images/cv/logo/symfony.png",
  ];
  return (
    <div className="w-7/12 max-lg:w-full  max-lg:mt-3 items-center h-full space-y-5 justify-center">
      <div className="flex flex-wrap items-center justify-center">
        {image.map((img) => (
          <div
            className={`w-16 h-16 m-2 object-contain ${
              img === "./images/cv/logo/symfony.png" ? "larger-symfo" : ""
            }`}
          >
            <img src={img} className="w-full h-full object-contain" alt={`logo-tekno ${img}`} />
          </div>
        ))}
      </div>

      <ComponenentTekno object={tek} />
    </div>
  );
};

export default DebutRight;
