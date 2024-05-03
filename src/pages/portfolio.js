import react, { useState } from "react";
import projects from "../classObject/portfolio/objetPortfolio";
import { Link } from "react-router-dom";
import DetailPage from "./detaiPage.js";
import DetailPageIntegration from "./datailPage_integration.js";
import CardCrea1 from "../components/cardCrea/cardCrea.js";
import { Fade, Hidden, Skeleton, Stack } from "@mui/material";
import {
  ButtonNavBar,
  OutlinedButtons,
} from "../components/common/button/button.js";
import { CSSTransition } from "react-transition-group";
import ModalDetailpage from "../components/portfolio/modalDetailPage.js";
import integration from "../classObject/portfolio/objectIntegrateur.js";
import Crea2 from "../components/portfolio/crea2/crea2.js";
import DetailPageIntagration from "./datailPage_integration.js";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIntegra, setSelectedIntegra] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("projet");
  const [activeProjectId, setActiveProjectId] = useState(null);

  // composant d'ordre supéririeur...

  // composant liste des traveaux projets onepage...
  const ListModel = ({ project, model, detail}) => {
    return (
      <>
        <CSSTransition
          in={activeMenuItem === project}
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
            {activeMenuItem === project &&
              model &&
              model.map((item) => (
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
                      detail(item);
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
                        <Skeleton animation="wave" variant="text" width={200} />
                      )}
                    </div>
                    <div className="w-1/3 mt-0  h-full flex justify-center  items-center  ">
                      
                      {item ? (
                        <img
                          className=" h-20 w-20 rounded-full shadow-3xl"
                          src={item.imageSrc[0]}
                          alt={item.titre}
                        />
                      ) : (
                        <Skeleton
                          animation="wave"
                          variant="circular"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CSSTransition>
      </>
    );
  };

  const openDetailPage = (project) => {
    setSelectedProject(project);
    setSelectedIntegra(null);
  };
  const openDetailPageIntegra = (integra) => {
    setSelectedIntegra(integra);
    setSelectedProject(null);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeDetailPage = () => {
    setSelectedProject(null);
  };
  const closeDetailPageIntegra = () => {
    setSelectedIntegra(null);
  };

  return (
    <div className="flex relative sm:h-full sm:mt-10  w-full ">
      <div className="lg:w-2/3 max-lg:hidden flex justify-center">
        <div
          className={`${
            selectedIntegra
              ? "hidden "
              : " sm:overflow-scroll  pb-10 lg:w-full xl:1/ max-lg:hidden justify-center flex sm:w-full "
          }`}
        >
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
        <div
          className={`${
            selectedProject
              ? "hidden"
              : " lg:w-full sm:overflow-scroll pb-10 max-lg:hidden justify-center flex sm:w-full"
          }`}
        >
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
              <DetailPageIntagration
                integra={selectedProject}
                onClose={closeDetailPage}
              />
            </>
          </CSSTransition>
        </div>
      </div>

      <div className="   lg:w-1/3 xl:1/2 max-lg:w-full 2xl:pt-10 lg:pt-10 ">
        <div className="flex lg:space-x-3 xl:space-x-10 items-end p-2 border-b max-sm:mb-5 max-md:w-full max-lg:flex-col ">
          <h1>portfolio</h1>
          <div className="flex xl:flex lg:flex-col max-md:justify-end max-md:w-full xl:justify-center 2xl:flex-row">
            <OutlinedButtons
              sx={{
                backgroundColor:
                  activeMenuItem === "projet"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                color: "",
              }}
              text="projets"
              onClick={() => setActiveMenuItem("projet")}
              isActive={activeMenuItem === "projet"}
            />
            <OutlinedButtons
              text="OnePage"
              onClick={() => setActiveMenuItem("integration")}
              sx={{
                backgroundColor:
                  activeMenuItem === "integration"
                    ? " rgba(255, 255, 255, 0.1)"
                    : "transparent",
                color: "",
              }}
              isActive={activeMenuItem === "integration"}
            />
          </div>
        </div>
        <div className="h-full w-full pb-32 max-sm:pb-0  border-amber-900 sm:overflow-y-scroll">
          <ListModel
            project="projet"
            model={projects}
            detail={openDetailPage}
          />

          <ListModel
            project="integration"
            model={integration}
            detail={openDetailPage}
          />
        </div>
      </div>

      {/* ModalDetailpage placé à l'intérieur de la div de rendu conditionnel */}
      {selectedProject && (
        <ModalDetailpage project={selectedProject} onClose={closeDetailPage} />
      )}
    </div>
  );
}; 

export default Portfolio;
