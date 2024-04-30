import React, { useRef } from "react";
import DebutLeft from "../components/cv/debut/left";
import DebutRight from "../components/cv/debut/right";
import CompetenceDigital from "../components/cv/milieu/compétenceDigital";
import ParcoursPro from "../components/cv/milieu/parcourPro";
import ParcoursScolair from "../components/cv/milieu/parcourscolaire";
import Header from "../components/cv/header/header";
import Pdf from "../components/cv/pdf/pdf";
import { ProgressBar } from "../components/home/graphique";
import { Element, Link, animateScroll as scroll } from "react-scroll";
const Cv = () => {
  const Lign = () => {
    return (
      <div className="w-2/3 m-auto border border-2 border-yellow-500  rounded-lg "></div>
    );
  };

  return (
    <div
      className="w-8/12 rounded-xl mt-2xl:mr-2 sm:h-full max-lg: max-2xl:mt-20 max-2xl:w-11/12 bg-neutral-50 pb-96 max-sm:w-full flex flex-col items-center text-slate-800 sm:overflow-y-scroll   absolute right-0 border"
      id="cv"
    >
      <Header />

      <section className="w-full p-3 h-full space-y-10">
        <div className=" w-full  space-y-3">
          <div className="flex p-3 max-lg:flex-col">
            <DebutLeft />
            <DebutRight />
          </div>
        </div>

        <div className="w-full border-b  p-3 space-y-20">
          <Lign />
          <CompetenceDigital />
          <Lign />

          <ParcoursPro />
          <Lign />

          <ParcoursScolair />
        </div>
        <Lign />

        <ProgressBar />
      </section>
    </div>
  );
};

export default Cv;
