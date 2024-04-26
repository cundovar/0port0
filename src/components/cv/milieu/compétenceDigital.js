import React from "react";
import digital from "./teknoModel/objectCompetanceDigital";
import ComponenentTekno from "../componenetTekno";


const CompetenceDigital = () => {
  return (
    <div className="flex max-sm:flex-col items-center justify-center bg-neutral-100 pt-20 pb-20 rounded-xl">
      <div className="w-5/12 max-sm:w-full">
        <h3>competences digitales</h3>
      </div>
      <div className="w-7/12 max-sm:w-full ">
      <ComponenentTekno object={digital}/>
      </div>
    </div>
  );
};

export default CompetenceDigital;
