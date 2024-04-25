import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Header=()=>{


    return(
<header className="flex w-full p-3 z-50 max-sm:flex-col">
    <div className="w-5/12 max-sm:w-full flex items-center justify-center  ">
        <img className="rounded-full h-60" src="./images/moi.jpg" alt="photo perso"/>
    </div>
<div className="7/12 max-sm:w-full max-sm:mt-5 ">
    <div className="h-2/5 max-sm:h-auto">
       <h1>Facundo Varas</h1>
        <h2 className="max-sm:text-xl">Développeur front-end/intégrateur </h2>

    </div>
    <div className="border max-sm:h-auto max-sm:mt-5   h-3/5 flex flex-col items-center justify-center ">
      <div className="space-y-5 ">
      <div className="flex flex-wrap border space-x-10">
<LanguageIcon/>
        <a href="https://pixell.varascundo.com/" >
        pixell.varascundo.com

        </a>
        <a href="https://github.com/cundovar" >
         github

        </a>

        
      </div>
      <div className="flex flex-wrap border space-x-10">
        <AttachEmailIcon/>
        <a href="varas.cundo@gmail.com" >
        varas.cundo@gmail.com
        </a>

        
      </div>
      <div className="flex flex-wrap border space-x-10">

<LocalPhoneIcon/>
       <p>06 23 84 84 45</p>
      </div>

      </div>

    </div>

</div>
      </header>
    )
}

export default Header