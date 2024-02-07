import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonNavBar, OutlinedButtons } from "./button/button";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  //     const [clicked, setClicked]=useState(false)
  // const handleChanges=()=>{
  // setClicked(!clicked)
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [barre,setBarre]=useState(false)

  const [startX, setStartX] = useState(null);
  const menuContentRef = useRef(null);

//fermer avec le doigt
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      const deltaX = e.touches[0].clientX - startX;
      if (deltaX > 50) {
        // Fermeture du menu si le déplacement à droite est supérieur à 50 pixels
        setMenuVisible(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };



  const toggleMenu = () => {
    setMenuVisible(!menuVisible);

   setBarre(!barre)
  };

  return (
    <>
    
 <a id="link" className="" href="#">
        <span id="burger1" className={`${barre ? "opene" : ""}`} onClick={toggleMenu}></span>
      </a>
    
    <div className="fixed  max-md:w-full max-md:z-30   h-full max-md:h-auto z-10 ">

      <div className="lg:flex 2xl:p-5 2xl:flex-col lg:space-x-5 2xl:space-x-1 lg:items-end  2xl:items-start  ">
        <h1>Javier Varas</h1>
        <div className="flex 2xl:flex-col   max-md:flex-col max-md:space-x-0 2xl:space-x-0  lg:space-x-5">
          <h3>integrateur </h3>
          <h3> dev front</h3>
        </div>
      </div>
      <div className={`flex flex-col h-full lg:mt-16   max-md:items-start max-md:justify-start  mt-4  border-red-600 ${menuVisible ? 'showMenu' : ''}`} id="menuContent"
                       ref={menuContentRef}
                       onTouchStart={handleTouchStart}
                       onTouchMove={handleTouchMove}
                       onTouchEnd={handleTouchEnd}  >
        <ul className="space-y-10 max-md:space-y-0 max-md:flex   flex-col max-lg:flex ">
          <NavLink to="/" onClick={toggleMenu}>
            <li>
              <ButtonNavBar
                className="2xl:text-4xl  text-xl  xl:text-2xl mb-10"
                text="Accueil"
              />
            </li>
          </NavLink>
          <NavLink to="/portfolio" onClick={toggleMenu}>
            <li>
              <ButtonNavBar
                className="2xl:text-4xl text-xl  xl:text-2xl mb-10 "
                text="Portfolio"
              />
            </li>
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            <li>
              <ButtonNavBar
                className="2xl:text-4xl text-xl  xl:text-2xl mb-10 "
                text="Contact"
              />
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
