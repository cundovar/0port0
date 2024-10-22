import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const IconAccueil=()=>{



    return(

        <div className="absolute 2xl:top-2 bottom-0 right-0 space-y-2  2xl:right-1/2 max-sm:hidden flex flex-col">
        <a href="https://github.com/cundovar" target="_blank">
          <GitHubIcon className="opacity-50 hover:opacity-100 cursor-pointer  largeIcon" />
        </a>

        <a href="mailto: varas.cundo@gmail.com" target="_blank">
          <EmailIcon className=" opacity-50 hover:opacity-100 cursor-pointer largeIcon" />
        </a>
      </div>
    )
}

export default IconAccueil