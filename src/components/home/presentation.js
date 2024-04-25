import React from "react";
import { Link } from "react-router-dom";



const Presentation=()=>{




    return(
        <div className="  w-full overflow-hidden  xl:flex justify-end items-end xl:pb-1 max-md:pt-10  "> 
        <div className=" xl:pt-10 2xl:mt-10 space-y-10 max-md:p-2 xl:p-5 2xl:p-20 pb-10  2xl:mr-10 2xl:mb-5 ">
        <p className="text-xl text-justify">
        Enthousiaste et passionné par le monde du développement web, je suis Facundo, un intégrateur web et développeur front-end. Mon parcours a débuté avec un bootcamp, une première étape qui a déclenché ma passion pour le code.
        </p>
        <p className="text-xl text-justify">
        Je suis conscient que devenir un développeur accompli ne se fait pas en un claquement de doigts, mais cela fait déjà deux ans que je me plonge intensément dans le monde du développement, explorant divers langages de manière autodidacte.
        </p>
       

        <p  ><a className="border p-3 max-2xl: hover:font-black"  href="./images/cv/CV.pdf" target="_blank">curriculum vitae</a> </p>
        <Link to="/cv">
            <p className="border p-3 max-2xl: hover:font-black" >
                cv
            </p>
        </Link>
        

        {/* <p className="text-xl text-justify">
        Au fil de mes journées, je me lance constamment des défis, découvrant de nouvelles technologies et perfectionnant mes compétences.
        </p> */}
        {/* <p className="text-xl text-justify">
        Dans ce portfolio vous pourrez explorer mes travaux sur WORDPRESS REACT SYMFONY ou le LOWCODE .
        </p>
        <p className="text-xl text-justify">
        Et pour le CSS :TAILWIND et BOOTSTRAP,SCSS
        </p>
        <p className="text-xl text-justify">
        Au-delà de mes compétences techniques, ma curiosité m'incite à rester constamment à jour sur les dernières avancées technologiques, effectuant une veille régulière pour rester à la pointe de mon domaine.
        </p> */}
        </div>

        </div>
    )
}

export default Presentation