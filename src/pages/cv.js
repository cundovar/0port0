import React from "react";
import DebutLeft from "../components/cv/debut/left";
import DebutRight from "../components/cv/debut/right";
import CompetenceDigital from "../components/cv/milieu/compétenceDigital";
import ParcoursPro from "../components/cv/milieu/parcourPro";
import ParcoursScolair from "../components/cv/milieu/parcourscolaire";
import Header from "../components/cv/header/header";
import Pdf from "../components/cv/pdf/pdf";
import { ProgressBar } from "../components/home/graphique";

const Cv = () => {



  return (


    <div className="w-8/12 border border-stone-900 h-full max-sm:mt-48 max-2xl:mt-20 max-2xl:w-11/12 pb-96 max-sm:w-full flex flex-col items-center bg-neutral-50 text-slate-800   absolute right-0 border overflow-y-scroll">

    
      <Header/>

        
      <section className="w-full p-3 border space-y-10">
        <div className="border w-full  space-y-3">
          <div className="flex p-3 max-sm:flex-col">
          <DebutLeft/>
           <DebutRight/>
          </div>
        </div>

        <div className="w-full border-b  p-3 space-y-20">
          <div className="w-2/3 m-auto border border-2 border-yellow-500  rounded-lg "></div>
       <CompetenceDigital/>
          <div className="w-2/3 m-auto border border-2 border-yellow-500  rounded-lg "></div>
          <ParcoursPro/>
          <div className="w-2/3 m-auto border border-2 border-yellow-500  rounded-lg "></div>
         <ParcoursScolair/>
        </div>
          <div className="w-2/3 m-auto border border-2 border-yellow-500  rounded-lg "></div>

        <ProgressBar/>
      </section>

        </div>

    
    
    
  );
};

export default Cv;
