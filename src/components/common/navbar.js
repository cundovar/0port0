import React from "react";
import { NavLink } from "react-router-dom";


const Navbar=()=>{


    return(
        <div className="fixed w-2/6 h-full">

        <h1>Javaier Varas</h1>
        <h3>integrateur dev front</h3>
        <div>

            <ul className="space-y-10 max-sm:flex max-sm:space-x-3">
                <NavLink to="/">
                    <li className="text-4xl mb-10 mt-10">Accueil</li>
                </NavLink>
                <NavLink to="/portfolio">
                    <li className="text-4xl mb-10">portfolio</li>
                </NavLink>
                <NavLink to="/contact">
                    <li className="text-4xl mb-10">Contact</li>
                </NavLink>
            </ul>

        </div>
        </div>
    )
}

export default Navbar