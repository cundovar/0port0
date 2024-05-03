import React, { useEffect, useRef } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Header=()=>{

 


    return(
<header className="flex w-full p-3 max-lg:flex-col bg-neutral-100  m-auto ">
    <div className=" imgscroll w-5/12 max-lg:w-full flex items-center justify-center  "  >
        <img className="rounded-full h-60" src="./images/moi.jpg" alt="photo perso"/>
    </div>
<div className="7/12 max-lg:w-full max-lg:mt-5 ">
    <div className="h-2/5 max-lg:h-auto">
       <h1>Facundo Varas</h1>
        <h2 className="max-sm:text-xl">Développeur front-end/intégrateur </h2>

    </div>
    <div className=" max-md:h-auto max-xl:mt-5   h-3/5 flex flex-col items-center justify-center ">
      <div className="space-y-5 ">
      <div className="flex flex-wrap max-sm:space-x-2 max-xl:items-center  sm:space-x-10">
<LanguageIcon/>
        <a href="https://pixell.varascundo.com/" className="text-xl"  >
        pixell.varascundo.com

        </a>
        <a href="https://github.com/cundovar" className="text-xl" >
         github

        </a>

        
      </div>
      <div className="flex flex-wrap  max-xl:items-center   space-x-10">
        <AttachEmailIcon/>
        <a href="varas.cundo@gmail.com"className="text-xl" >
        varas.cundo@gmail.com
        </a>

        
      </div>
      <div className="flex flex-wrap  max-xl:items-center  space-x-10">

<LocalPhoneIcon/>
       <p className="text-xl">06 23 84 84 45</p>
      </div>

      </div>

    </div>

</div>
      </header>
    )
}

export default Header