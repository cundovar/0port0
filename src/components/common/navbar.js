import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonNavBar, OutlinedButtons } from "./button/button";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  //     const [clicked, setClicked]=useState(false)
  // const handleChanges=()=>{
  // setClicked(!clicked)

  return (
    <div className="fixed  h-full">
      <div className="lg:flex 2xl:p-5 2xl:flex-col lg:space-x-5 2xl:space-x-1 lg:items-end  2xl:items-start  ">
        <h1>Javier Varas</h1>
        <div className="flex 2xl:flex-col  2xl:space-x-0  lg:space-x-5">
          <h3>integrateur </h3>
          <h3> dev front</h3>
        </div>
      </div>
      <div className="flex flex-col h-full mt-16   border-red-600  ">
        <ul className="space-y-10 max-sm:flex max-sm:space-x-3">
          <NavLink to="/">
            <li>
              <ButtonNavBar
                className="text-4xl lg:text-2xl mb-10"
                text="Accueil"
              />
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>
              <ButtonNavBar
                className="text-4xl lg:text-2xl mb-10 "
                text="Portfolio"
              />
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <ButtonNavBar
                className="text-4xl lg:text-2xl mb-10 "
                text="Contact"
              />
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
