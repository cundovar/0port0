import React from "react";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="  w-full sm:overflow-hidden  xl:flex justify-end items-end xl:pb-1 max-md:pt-10  ">
      <div className=" xl:pt-8 2xl:mt-6 max-sm:p-2 2xl:space-y-10 max-md:p-2 xl:p-5 2xl:p-20 pb-10  2xl:mr-10 2xl:mb-10   ">
        <p className="text-xl text-justify">
          Création d'api simple ave Symfony ou Nodejs, CRUD.
        </p>
        <p className="text-xl text-justify">
          Creation d'objets ou de tableaux pour rendre la code plus dynamique et
          le jsx plus maintenable et rendre le code propre.
        </p>
        <p className="text-xl text-justify">
          Bonne expérience en Scss pour les details mais je préfère Tailwind à
          Bootstrap pour la construction de la page.
        </p>
        <p className="text-xl text-justify">
          Utilisation réguliaire de bibliothèques Javascript
        </p>
        <p className="text-xl text-justify">
          Je suis conscient que devenir un développeur accompli ne se fait pas
          en un claquement de doigts, mais cela fait déjà deux ans que je me
          plonge intensément dans le monde du développement, explorant divers
          langages de manière autodidacte.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
