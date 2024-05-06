import React from "react";
import digital from "./teknoModel/objectCompetanceDigital";
import ComponenentTekno from "../componenetTekno";
import H3Titre from "../h3titre";


const CompetenceDigital = () => {
  return (
    <div className="flex max-sm:flex-col items-center justify-center bg-neutral-100 pt-20 pb-20 max-sm:pt-10 max-sm:pb-10  rounded-xl">
      <H3Titre titre="competences digitales"/>
      
      <div className="w-7/12 max-sm:w-full  ">
      <ComponenentTekno object={digital}/>
      </div>
    </div>
  );
};

export default CompetenceDigital;
