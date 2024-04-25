import React from "react";

const DebutLeft = () => {
  return (
    <div className="w-5/12 border max-sm:w-full  ">
      <div className="h-1/4max-sm:w-full border">
        <h3>compétences en développement web</h3>
      </div>
      <div className="flex items-center justify-center border max-sm:h-auto h-3/4">
        <div className="space-y-3 w-3/4 max-sm:w-full   flex border flex-col justify-center m-auto">
          <div className="flex ">
            <div className="w-1/12 h-8 flex border items-center justify-center">
              <img
                className="h-full w-full object-contain"
                src="./images/cv/svg/svg.svg"
              />
            </div>
            <div className="w-11/12 h-8 border flex items-center ">
              <p className="text-2xl">reponsive design</p>
            </div>
          </div>
          <div className="flex ">
            <div className="w-1/12 h-8 flex border items-center justify-center">
              <img
                className="h-full w-full object-contain"
                src="./images/cv/svg/svg.svg"
              />
            </div>
            <div className="w-11/12 h-8 border flex items-center ">
              <p className="text-2xl">Model Vue Controller</p>
            </div>
          </div>
          <div className="flex ">
            <div className="w-1/12 h-8 flex border items-center justify-center">
              <img
                className="h-full w-full object-contain"
                src="./images/cv/svg/svg.svg"
              />
            </div>
            <div className="w-11/12 h-8 border flex items-center ">
              <p className="text-2xl">StoryBook</p>
            </div>
          </div>
          <div className="flex ">
            <div className="w-1/12 h-8 flex border items-center justify-center">
              <img
                className="h-full w-full object-contain"
                src="./images/cv/svg/svg.svg"
              />
            </div>
            <div className="w-11/12 h-8 border flex items-center ">
              <p className="text-2xl">composants réutilisables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebutLeft;
