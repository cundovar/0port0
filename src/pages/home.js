import React, { useState } from "react";
import Presentation from "../components/home/presentation";
import Competence from "../components/home/competence";
import CardCrea1 from "../components/cardCrea/cardCrea";

const Home = () => {
  const [isVisible, setIsvisible] = useState(false);
  const t = () => {
    console.log("Toggle visible clicked");
    setIsvisible((preVisble) => !preVisble);
  };

  return (
    <div className="flex w-full brder-blue-700 ">
      <div className="w-1/2 h-full ">
        <div className="w-1/2">
        <div className={` h-full ${isVisible ? "visible" : "invisible"}`}>
          <Competence />
        </div>

        </div>
      </div>
      <div className=" w-1/2 border-orange-600 relative h-full ">
        <div className="  pb-2 border-b  z-50">
          <div className="flex justify-start items-end border space-x-5">
            <h2>accueil</h2>
            <ul className="flex space-x-5">
            
              <li onClick={t} className="cursor-pointer">Voir mes competences</li>
              
            </ul>
          </div>
        </div>
        <div className="w-2/3 absolute right-0   h-full border-emerald-500   overflow-scroll ">
          <Presentation />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
