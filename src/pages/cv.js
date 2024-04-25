import React from "react";
import DebutLeft from "../components/cv/debut/left";
import DebutRight from "../components/cv/debut/right";
import CompetenceDigital from "../components/cv/milieu/compétenceDigital";
import ParcoursPro from "../components/cv/milieu/parcourPro";
import ParcoursScolair from "../components/cv/milieu/parcourscolaire";
import Header from "../components/cv/header/header";
import Pdf from "../components/cv/pdf/pdf";

const Cv = () => {



  return (
    <div className="w-8/12 h-full max-sm:mt-48 pb-96 max-sm:w-full flex flex-col items-center bg-neutral-50 text-slate-800   absolute right-0 border overflow-y-scroll">
  
    
      <Header/>

      <section className="w-full p-3 border space-y-5">
        <div className="border w-full  space-y-3">
          <div className="flex p-3 max-sm:flex-col">
          <DebutLeft/>
           <DebutRight/>
          </div>
        </div>

        <div className="w-full border p-3 space-y-20">
       <CompetenceDigital/>
          <ParcoursPro/>
         <ParcoursScolair/>
        </div>
      </section>

        </div>
    
  );
};

export default Cv;
