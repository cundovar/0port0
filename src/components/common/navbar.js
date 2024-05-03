import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonNavBar, OutlinedButtons } from "./button/button";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  //     const [clicked, setClicked]=useState(false)
  // const handleChanges=()=>{
  // setClicked(!clicked)
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [barre, setBarre] = useState(false);
  const location = useLocation();
  const [startX, setStartX] = useState(null);
  const menuContentRef = useRef(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/apropos":
        setActiveIndex(1);
        break;
      case "/portfolio":
        setActiveIndex(2);
        break;
      case "/contact":
        setActiveIndex(3);
        break;
      case "/cv":
        setActiveIndex(4);
        break;

      default:
        setActiveIndex(0);
    }
  }, [location.pathname]);

  const liContent = [
    ["0", "Accueil", "/"],
    ["1", "A propos", "/apropos"],
    ["2", "Portfolio", "/portfolio"],
    ["3", "Contact", "/contact"],
    ["4", "CV", "/cv"],
  ];

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

    setBarre(!barre);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className="h-full  max-lg:w-11/12 border lg:mt-20 ">
      <a
        id="link"
        className=" max-lg:bg-black m-3   flex items-center justify-center"
        href="#"
      >
        <span
          id="burger1"
          className={`${barre ? "opene" : ""}`}
          onClick={toggleMenu}
        ></span>
      </a>

      <div className="fixed  max-lg:w-full z-40    ">
        
        <div
          className={`flex flex-col max-sm:shadow-2xl  lg:mt-16 max-sm:backdrop-blur-xl pb-3  max-lg:w-full  max-md:items-start max-md:justify-start  mt-4 max-sm:mt-0 border-red-600 ${
            menuVisible ? "showMenu" : ""
          }`}
          id="menuContent"
          ref={menuContentRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className=" p-2 lg:hidden ">
            <h2 className="text-xl">Facundo Javier Varas</h2>
            <h2 className="text-lg">dev front/integrateur</h2>
          </div>
          <ul className=" lg:space-x-28 md:w-11/12 max-md:space-y-0 max-lg:flex flex-col max-lg:flex max-lg:flex-row max-lg:flex-wrap max-lg:justify-around max-lg:space-x-2">
            {liContent.map((content) => (
              <NavLink
                key={content[0]}
                to={content[2]}
                onClick={() => {
                  toggleMenu();
                  setActiveIndex(content[0]);
                }}
              >
                <li
                  className={`flex items-center max-sm:m-1 max-sm:border max-sm:rounded-xl ${
                    location.pathname === content[2] ? "lg:border-l-2  max-lg:bg-cyan-600  " : ""
                  }`}
                >
                  <ButtonNavBar
                    className="2xl:text-4xl text-xl font-black xl:text-2xl max-sm:text-xl"
                    text={content[1]}
                  />
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
