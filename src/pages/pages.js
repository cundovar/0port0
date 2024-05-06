import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
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
    <div className="h-full border  w-full max-2xl:border-0 relative flex border-stone-600 xl:overflow-hidden">

      <button className=" max-lg:hidden absolute h-10  flex items-center justify-center z-50 mt-1 cursor-pointer pt-0 right-0  ">

        <a className= "transition ease-in-out delay-150  hover:opacity-100   duration-300 bg-cyan-600   p-2 rounded-xl m-1" href={getLinkPage()[0]} target="_blank">
          <p className=" ">voir le code de : {getLinkPage()[1]} </p>
        </a>
      </button>


      <div className="lg:visible max-lg:invisible">
        <LoadingPage />
      </div>

      <AnimationSVG />
      <div className="absolute max-lg:hidden  top-0 left-0">
      <div className="lg:flex 2xl:p-5 max-lg:mt-10 2xl:flex-col   lg:space-x-5  2xl:space-x-1 lg:items-end  2xl:items-start  ">
          <h1>Facundo Javier Varas</h1>
          <div className="flex 2xl:flex-col mx:md:hidden space-x-0  max-lg:flex-col  2xl:space-x-0  lg:space-x-5">
            <h3>integrateur </h3>
            <h3> dev front</h3>
          </div>
        </div>
        
      </div>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={800}>
          <div className="w-11/12 max-sm:mt-10 max-xl:w-full absolute h-full right-0">
            <div className="w-full h-full sm:flex justify-center relative">
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
              <div className="absolute w-10 flex justify-center max-xl:hidden logo h-20 z-50 bottom-0 right-3">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            )}

            <div className="absolute w-16   z-20  lg:hidden m-2 rounded-full overflow-hidden top-0 max-sm:-top-10 left-0">
              <Link to="/">
              <img className="rounded-full h-full w-full object-cover " src="./images/logo/logo_accueil/logo-accueil.png" alt='logo-accueil' />
              </Link>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Page;
