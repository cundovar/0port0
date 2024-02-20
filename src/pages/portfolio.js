import react, { useState } from "react";
import projects from "../classObject/portfolio/objetPortfolio";
import { Link } from "react-router-dom";
import DetailPage from "./detaiPage.js";
import CardCrea1 from "../components/cardCrea/cardCrea.js";
import { Fade, Skeleton, Stack } from "@mui/material";
import {
  ButtonNavBar,
  OutlinedButtons,
} from "../components/common/button/button.js";
import { CSSTransition } from "react-transition-group";
import ModalDetailpage from "../components/portfolio/modalDetailPage.js";
import integration from "../classObject/portfolio/objectIntegrateur.js";
import Crea2 from "../components/portfolio/crea2/crea2.js";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("projet");
  const [activeProjectId, setActiveProjectId] = useState(null);
  const openDetailPage = (project) => {
    // console.log("Ouverture de la page de détails avec le projet :", project);
    setSelectedProject(project);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeDetailPage = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex relative h-full sm:mt-10  border-lime-400 w-full ">
      <div className=" lg:w-2/3 xl:1/  max-lg:hidden  justify-center flex sm:w-full">
        <CSSTransition
          in={selectedProject}
          timeout={5000}
          classNames={{
            enter: "fade-enter",
            enterActive: "fade-enter-active",
            exit: "fade-exit",
            exitActive: "fade-exit-active",
          }}
          unmountOnExit
        >
          <>
            <DetailPage project={selectedProject} onClose={closeDetailPage} />
          </>
        </CSSTransition>
      </div>

      <ModalDetailpage project={selectedProject} onClose={closeDetailPage} />
      <div className=" max-lg:mt-20  border-red-600  lg:w-1/3 xl:1/2 max-lg:w-full   2xl:pt-10  lg:pt-10  ">
        <div className="flex  lg:space-x-3 xl:space-x-10 items-end p-2 border-b max-md:w-full max-lg:flex-col  ">
          <h1>portfolio</h1>
          <div className="flex xl:flex lg:flex-col  max-md:justify-end max-md:w-full xl:justify-center 2xl:flex-row">
            {/* <ul className="flex space-x-11 just ify-arround items-center"> */}

            {/* <OutlinedButtons
              sx={{
                backgroundColor:
                  activeMenuItem === "projet"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                color: "",
              }}
              text="projet"
              onClick={() => setActiveMenuItem("projet")}
              isActive={activeMenuItem === "projet"}
            /> */}
            {/* <OutlinedButtons
              text="intégration"
              onClick={() => setActiveMenuItem("integration")}
              sx={{
                backgroundColor:
                  activeMenuItem === "integration"
                    ? " rgba(255, 255, 255, 0.1)"
                    : "transparent",
                color: "",
              }}
              isActive={activeMenuItem === "integration"}
            /> */}
          </div>
        </div>
        <div className="h-full w-full pb-32   border-amber-900  overflow-y-scroll">
          <CSSTransition
            in={activeMenuItem === "projet"}
            timeout={5000}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
              exit: "fade-exit",
              exitActive: "fade-exit-active",
            }}
            unmountOnExit
          >
            <div>
              {activeMenuItem === "projet" &&
                projects &&
                projects.map((item) => (
                  <div
                    key={item.id}
                    className={`flex   justify-end 2xl:m-10 lg:m- ${
                      activeProjectId === item.id
                        ? " border-b border-l shadow-2xl opacity-100"
                        : ""
                    } `}
                  >
                    <div
                      className="flex  justify-center w-full  xl:visible lg:relative  cursor-pointer hover:opacity-100 opacity-80 max-md:opacity-100 mt-3 2xl:mt-0  "
                      onClick={() => {
                        setActiveProjectId(item.id);
                        openDetailPage(item);
                      }}
                    >
                      <div className="w-2/3  hover:opacity-100">
                        {item ? (
                          <>
                            <h2 className=" hover:opacity-100 xl:text-4xl lg:text-2xl max-md:text-xl">
                              {item.titre}
                            </h2>
                            <div className=" mt-1 bg-gradient-to-r from-cyan-600 p-1">
                              <p>{item.type}</p>
                            </div>
                          </>
                        ) : (
                          <Skeleton
                            animation="wave"
                            variant="text"
                            width={200}
                          />
                        )}
                      </div>
                      <div className="w-1/3 mt-0  h-full flex justify-center border-lime-500 items-center  ">
                        {item ? (
                          <img
                            className=" h-20 w-20 rounded-full shadow-3xl"
                            src={item.imageSrc[0]}
                            alt={item.titre}
                          />
                        ) : (
                          <Skeleton
                            animation="wave"
                            variant="rect"
                            width={200}
                            height={100}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CSSTransition>

          <CSSTransition
            in={activeMenuItem === "integration"}
            timeout={5000}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
              exit: "fade-exit",
              exitActive: "fade-exit-active",
            }}
            unmountOnExit
          >
            <div>
              {activeMenuItem === "integration" &&
                integration &&
                integration.map((item) => (
                  <div
                    key={item.id}
                    className="flex mb-10  space-y-4 justify-end w-3/4 m-auto space-x-3 mt-5 xl:visible lg:relative  cursor-pointer hover:opacity-100 opacity-80 max-md:opacity-100 max-md:space-y-5 xl:space-y-3  "
                  >
                    <div className="w-2/3 m-auto opacity-70  hover:opacity-100  ">
                      {item ? (
                        <>
                          <h2 className=" hover:opacity-100 xl:text-4xl lg:text-2xl max-md:text-xl">
                            {item.titre}
                          </h2>
                          <div className=" mt-1 bg-gradient-to-r from-cyan-600 p-1">
                            <p>{item.type}</p>
                          </div>
                        </>
                      ) : (
                        <Skeleton animation="wave" variant="text" width={200} />
                      )}
                    </div>
                    <div className="w-1/3 ">
                      {item ? (
                        <img
                          className="  h-20 w-20 "
                          src={item.imageSrc}
                          alt={item.titre}
                        />
                      ) : (
                        <Skeleton
                          animation="wave"
                          variant="rect"
                          width={200}
                          height={100}
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
