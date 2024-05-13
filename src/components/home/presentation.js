import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../App";

const Presentation = () => {
  const { mode } = useContext(ColorModeContext);

  return (
    <div className="  w-full sm:overflow-hidden  xl:flex justify-end items-end xl:pb-1 max-md:pt-10  ">
      <div className="   max-sm:p-2 2xl:space-y-8 space-y-5 max-md:p-2 xl:p-5 2xl:p-20 pb-10  2xl:mr-10 2xl:mb-10   ">
        <p className="text-xl text-justify">
          Création d'api simple avec Symfony ou Nodejs,{" "}
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          >
            CRUD{" "}
          </span>
          .
        </p>
        <p className="text-xl text-justify">
          Creation d'objets ou de tableaux pour rendre le code plus dynamique et
          le jsx plus maintenable.{" "}
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          >
            Cleancode
          </span>
        </p>
        <p className="text-xl text-justify">
          Bonne expérience en
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          > Scss </span>
          
            pour les details mais je préfère
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          >
            {" "}
            Tailwind{" "}
          </span>{" "}
          à
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          >
            {" "}
            Bootstrap{" "}
          </span>
          pour la construction de la page.
        </p>
        <p className="text-xl text-justify">
          Utilisation réguliaire de
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          >
            {" "}
            bibliothèques Javascript{" "}
          </span>
        </p>
        <p className="text-xl text-justify">
          Je suis conscient que devenir un développeur accompli ne se fait pas
          en un claquement de doigts, mais cela fait déjà
          <span
            className={mode === "light" ? "text-pink-500" : "text-pink-300"}
          >
            {" "}
            trois ans{" "}
          </span>
          que je me plonge intensément dans le monde du développement, explorant
          divers langages de manière autodidacte.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
