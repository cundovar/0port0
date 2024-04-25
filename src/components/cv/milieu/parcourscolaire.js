import React from "react";
import Parcour from "../parcourComponent";



const ParcoursScolair=()=>{




    return(
        <div className="flex w-full max-sm:flex-col">
        <div className="w-5/12 max-sm:w-full h-full">
          <h3>Parcours scolaire</h3>
        </div>
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