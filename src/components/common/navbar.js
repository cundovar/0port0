import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonNavBar } from "./button/button";
import { CSSTransition } from "react-transition-group";




const Navbar=()=>{
    const [clicked, setClicked]=useState(false)
const handleChange=()=>{
setClicked(!clicked)
   
}

    return(
        <div className="fixed w-2/6 h-full">

        <h1>Javier Varas</h1>
        <div className="flex lg:flex-col">
        <h3>integrateur </h3>
        <h3> dev front</h3>

        </div>
        <div className="flex flex-col h-full justify-center ">

            <ul className="space-y-10 max-sm:flex max-sm:space-x-3">
            <NavLink to="/">
            <li>
            <ButtonNavBar
                className={`text-4xl lg:text-2xl mb-10  ${clicked ? "font-bold backcolor" : ""}`}
              onClick={handleChange}
              text="Accueil"/>
                </li>
            
          </NavLink>
          <NavLink to="/portfolio">
           <li>
             <ButtonNavBar
               
              className={`text-4xl lg:text-2xl mb-10  ${clicked ? "font-bold backcolor" : ""}`}
              onClick={handleChange}
              text="Portfolio"
            />
            
            </li>
            
          </NavLink>
          <NavLink to="/contact">
           <li>
            <ButtonNavBar
               className={`text-4xl lg:text-2xl mb-10  ${clicked ? "font-bold backcolor" : ""}`}
              onClick={handleChange}
              text="Contact"
            />
            
            </li> 
          </NavLink>
                    
                
            </ul>

        </div>
 

        </div>
    )
}

export default Navbar