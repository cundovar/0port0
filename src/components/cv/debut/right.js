import React from "react";
import ComponenentTekno from "../componenetTekno";
import tek from "../milieu/teknoModel/objectTekno";

 const DebutRight=()=>{


    return(
        <div className="w-7/12 max-sm:w-full border items-center h-full space-y-5 justify-center">
        <div className="flex flex-wrap items-center justify-center space-y-2 space-x-2">
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/api.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/Bootstrap.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/js.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-20 h-20">
            <img
              src="./images/cv/logo/php.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/React.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/sass.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/tailwind.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/wordpress.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/symfony.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16">
            <img
              src="./images/cv/logo/logo-twig.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
     
         <ComponenentTekno object={tek}/>
        
      </div>

    )
 }

 export default DebutRight