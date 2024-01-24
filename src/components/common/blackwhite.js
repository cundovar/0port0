import React, { useState } from "react";


const Blackwhite=()=>{
const [isDarkMode,setIsDarkMode]=useState(false)



const darken=document.querySelector(".darken")
const changecolorBack=()=>{
    // Utilisez setIsDarkMode pour basculer entre le mode clair et le mode sombre
    setIsDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = !isDarkMode ? "white" : "black";
   darken.textContent = isDarkMode ? "Mode jour" : "Mode nuit";
};

    return(
        <>
        <div className='fixed bottom-0 z-50'>
        <div className="flex space-x-5">
          
            <button className="darken" onClick={changecolorBack}>
          mode nuit
            </button>
        </div>
        </div>
        
        </>
    )
}

export default Blackwhite