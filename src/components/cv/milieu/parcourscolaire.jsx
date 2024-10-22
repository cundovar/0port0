import React from "react";
import Parcour from "../parcourComponent";
import H3Titre from "../h3titre";



const ParcoursScolair=()=>{




    return(
        <div className="flex w-full max-sm:flex-col bg-neutral-100 pt-20 pb-20 max-sm:pt-10 max-sm:pb-10  rounded-xl">
          <H3Titre titre="Parcours scolaire"/>
       
        <div className="w-7/12 max-sm:w-full ">
         <Parcour date="2022" titre="Certification developpeur front Bac+2" text="Ecole DORANCO"/>
         <Parcour date="2012" titre="CAP petite enfance" text="Cours du soir de la Mairie de Paris"/>
         <Parcour date="1998-2001" titre="DEUG CINEMA/AUDIOVISUEL (NIVEAU)" text="Université Audiovisuelle de Marne-la-Vallée"/>
         <Parcour date="1998" titre="BAC L OPTION CINÉMA AUDIOVISUEL" text="Université Audiovisuelle de Marne-la-Vallée"/>
        </div>
      </div>
    )
}

export default ParcoursScolair