import React, { useEffect } from "react";
import Parcour from "../parcourComponent";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";






const ParcoursPro=()=>{
  


    return(
<div className="flex relative max-sm:flex-col  bg-neutral-100 pt-20 pb-20 rounded-xl  w-full">
            <div className="w-5/12 max-sm:w-full  h-full">
              <h3 className="a">Parcours professionnel</h3>
            </div>
            <div className="w-7/12 max-sm:w-full" id="sec-ea">
              <Parcour date="2022-2024" text="Création sites web :" titre="  DÉVELOPPEUR WEB FREELANCE"
              
                text3="refonte de sites wordpress/ajout fonctionalités"
                text5="site de peinture fullstack react/symfony"
                text6="onepage nocode"
                />

              <Parcour titre="VEILLEUR DE NUIT" text="Pour coder"/>
              <Parcour titre="ILLUSTRATION LIVRE POUR ENFANTS" text4="Neva" lien="https://www.fnac.com/a16974853/Damayanthi-Ravindher-Neva?oref=00000000-0000-0000-0000-000000000000&Origin=SEA_GOOGLE_FL_BOOKS"/>
              <Parcour titre="COURSIER À VÉLO" text="Pour garder la forme"/>
         

              <Parcour text="Entreprise :Eclair de génie" titre="ASSISTANT LOGISTICIEN "date="2018-2021" />
              <Parcour text="Mairie de Chelle" titre="ANIMATEUR PÉRISCOLAIRE"date="2013-2018" />
              
        
            </div>
          </div>
    )
}

export default ParcoursPro