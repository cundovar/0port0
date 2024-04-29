import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Portfolio from "./portfolio";
import Navbar from "../components/common/navbar";
import Home from "./home";
import Contact from "./contact";
import AnimationSVG from "../components/animation/animationHome";
import CardCrea1 from "../components/cardCrea/cardCrea";
import LoadingPage from "../components/animation/loadingpage";
import Accueil from "./accueil";
import Cv from "./cv";
import Pdf from "../components/cv/pdf/pdf";

const Page = () => {
  const location = useLocation();

  const getLinkPage = () => {
    switch (location.pathname) {
      case "/":
        return [
          "https://github.com/cundovar/0port0/blob/main/src/pages/accueil.js",
          "accueil",
        ];
      case "/apropos":
        return [
          "https://github.com/cundovar/0port0/tree/main/src/components/home",
          "a propos",
        ];
      case "/portfolio":
        return [
          "https://github.com/cundovar/0port0/tree/main/src/components/portfolio",
          "portfolio",
        ];
      case "/contact":
        return [
          "https://github.com/cundovar/0port0/blob/main/src/pages/contact.js",
          "contact",
        ];
      case "/cv":
        return [
          "https://github.com/cundovar/0port0/blob/main/src/pages/cv.js",
          "cv",
        ];

      default:
        return "";
    }
  };

  return (
    <div className="h-full border w-full max-2xl:border-0 relative flex border-stone-600 overflow-hidden">

      <button className=" max-lg:hidden absolute h-10  flex items-center justify-center z-50 mt-1 cursor-pointer pt-0 right-0  ">

        <a className= "transition ease-in-out delay-150  hover:opacity-100   duration-300 bg-cyan-600   p-2 rounded-xl m-1" href={getLinkPage()[0]} target="_blank">
          <p className=" ">voire le code de : {getLinkPage()[1]} </p>
        </a>
      </button>


      <div className="lg:visible max-lg:invisible">
        <LoadingPage />
      </div>

      <AnimationSVG />
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={800}>
          <div className="w-11/12 max-sm:mt-10 max-md:w-full absolute h-full right-0">
            <div className="w-full h-full flex justify-center relative">
              <Routes location={location}>
                <Route path="/" element={<Accueil />} />
                <Route path="/apropos" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/portfolio/crea" element={<CardCrea1 />} />
              </Routes>
            </div>
            {location.pathname === "/cv" && (
              <div className="absolute w-10 flex justify-center logo h-20 z-50 bottom-0 right-3">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Page;
