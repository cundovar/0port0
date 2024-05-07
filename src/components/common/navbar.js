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
    ["4", "CV", "/cv"],
    ["2", "Portfolio", "/portfolio"],
    ["3", "Contact", "/contact"],
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
    <div className="xl:h-full h-[1rem]  max-xl:w-11/12  lg:mt-20 ">
      <a
        id="link"
        className=" max-xl:bg-black m-3   flex items-center justify-center"
        href="#"
      >
        <span
          id="burger1"
          className={`${barre ? "opene" : ""}`}
          onClick={toggleMenu}
        ></span>
      </a>

      <div className="fixed  max-xl:w-full z-40    ">
        
        <div
          className={`flex flex-col max-sm:shadow-2xl  xl:mt-16 max-lg:backdrop-blur-xl pb-3  max-xl:w-full    mt-4 max-xl:mt-0  ${
            menuVisible ? "showMenu" : ""
          }`}
          id="menuContent"
          ref={menuContentRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={` p-2 lg:hidden  ${location.pathname==='/cv' && 'md:text-black'}   `}>
            <h2 className="text-xl">Facundo Javier Varas</h2>
            <h2 className="text-lg">dev front/integrateur</h2>
          </div>
          <ul className="  xl:space-x-28 md:w-11/12  flex-col max-xl:flex max-xl:flex-row max-xl:flex-wrap max-xl:justify-around m-1">
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
                  className={`flex items-center max-xl:m-1 max-xl:border max-xl:rounded-xl ${
                    location.pathname === content[2] ? "lg:border-b-2  max-xl:bg-cyan-600  " : ""
                  }`}
                >
                  <ButtonNavBar
                    className="2xl:text-3xl text-xl font-black xl:text-2xl max-sm:text-xl"
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
