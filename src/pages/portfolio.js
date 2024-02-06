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

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("projet");

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
    <div className="flex   border-lime-400 w-full ">
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

          <ModalDetailpage project={selectedProject} onClose={closeDetailPage}/>
      <div className=" max-md:mt-20  border-red-600  lg:w-1/3 xl:1/2 max-md:w-full   2xl:pt-10  lg:pt-10  ">
        <div className="flex  lg:space-x-3 xl:space-x-10 items-end p-2 border-b max-md:w-full max-lg:flex-col  ">
          <h1>portfolio</h1>
          <div className="flex xl:flex lg:flex-col  max-md:justify-end max-md:w-full xl:justify-center 2xl:flex-row">
            {/* <ul className="flex space-x-11 justify-arround items-center"> */}

            <OutlinedButtons
              sx={{
                backgroundColor:
                  activeMenuItem === "projet"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                color: "wheat",
              }}
              text="projet"
              onClick={() => setActiveMenuItem("projet")}
              isActive={activeMenuItem === "projet"}
            />
            <OutlinedButtons
              text="intégration"
              onClick={() => setActiveMenuItem("integration")}
              sx={{
                backgroundColor:
                  activeMenuItem === "integration"
                    ? " rgba(255, 255, 255, 0.1)"
                    : "transparent",
                color: "wheat",
              }}
              isActive={activeMenuItem === "integration"}
            />
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
                    className=" flex  border-green-600   justify-end   2xl:m-10 lg:m-5  "
                  >
                    <div
                      className="flex  justify-end w-6/6 space-x-3 xl:visible lg:relative  cursor-pointer hover:opacity-100 opacity-50 max-md:opacity-100 max-md:space-y-5  "
                      onClick={() => openDetailPage(item)}
                    >
                      <div className="w-2/3 ">
                    
                        {item ? (
                          <>
                            <h2 className="xl:text-4xl lg:text-2xl max-md:text-xl">
                              {item.titre}
                            </h2>
                            <p>{item.type}</p>
                          </>
                        ) : (
                          <Skeleton
                            animation="wave"
                            variant="text"
                            width={200}
                          />
                        )}
                      </div>
                      <div className="w-1/3 ">
                        {item ? (
                          <img
                            className=""
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
                    {/* <Link
                      to={`/portfolio/detail/${item.id}`}
                      className="flex sm:relative sm:visible  lg:invisible lg:absolute justify-end w-6/6 space-x-3 cursor-pointer hover:opacity-100 border opacity-50  "
                    >
                      <div className="w-2/3 max-md:hidden ">
                        {item ? (
                          <>
                            <h2 className="xl:text-4xl lg:text-xl">
                              {item.titre}
                            </h2>
                            <p>{item.tekno}</p>
                          </>
                        ) : (
                          <Skeleton
                            animation="wave"
                            variant="text"
                            width={200}
                          />
                        )}
                        <p>{item.tekno}</p>
                      </div>
                      <div className="w-1/3 ">
                        <img
                          className=" "
                          src={item.imageSrc}
                          alt={item.titre}
                        />
                      </div>
                    </Link> */}
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
              {activeMenuItem === "integration" && (
                <div className="flex    flex-col justify-center items-center">
                  <CardCrea1 />
                </div>
              )}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
