import react, { useContext, useState } from "react";
import projects from "../classObject/portfolio/objetPortfolio.jsx";

import DetailPage from "./detaiPage.jsx";

import {  Skeleton} from "@mui/material";
import {
  OutlinedButtons,
} from "../components/common/button/button.jsx";
import { CSSTransition } from "react-transition-group";
import ModalDetailpage from "../components/portfolio/modalDetailPage.jsx";
import integration from "../classObject/portfolio/objectIntegrateur.jsx";

import { Helmet } from "react-helmet";
import DetailPageIntagration from "./datailPage_integration.jsx";
import { ColorModeContext } from "../App.jsx";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIntegra, setSelectedIntegra] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("projet");
  const [activeProjectId, setActiveProjectId] = useState(null);
  const{ mode}=useContext(ColorModeContext)

  // composant d'ordre supéririeur...

  // composant liste des traveaux projets onepage...
  const ListModel = ({ project, model, detail}) => {
    return (
      <>
   <Helmet>
      <title>Présentation</title>
      <meta name="description" content="Découvrez mon portfolio de développeur web. Consultez mes projets de développement fullstack et d'intégration, avec détails sur mes compétences et expériences." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" 
        content="intégrateur web, développeur front-end, React, Vue.js, portfolio" />
        <meta name="google-site-verification" content="RLNuYaEsZJ1AkNoytpD26ogr0wGi2HcuxkjenfrqCbE" />
      <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Portfolio ${project}",
        "description": "Découvrez mon travail en tant que développeur web dans la section ${project} de mon portfolio.",
        "creator": {
          "@type": "Person",
          "name": "Facundo Varas"
        },
        
      }
    `}
  </script>
    </Helmet>
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
          <div className="  overflow-y-auto h-[35rem] xl:pb-[30rem]  ">
            {activeMenuItem === project &&
              model &&
              model.map((item) => (
                <div
                  key={item.id}
                  className={`flex max:lg:items-center mt-10  justify-end 2xl:m-10 lg:m- ${
                    activeProjectId === item.id
                      ? " border-b border-l shadow-2xl opacity-100"
                      : ""
                  } `}
                >
                  <div
                    className="flex  justify-center w-full max-sm:w-full max-lg:w-10/12 max-lg:m-auto   xl:visible lg:relative  cursor-pointer hover:opacity-100 opacity-80 max-md:opacity-100 mt-3 2xl:mt-0  "
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
    <div className="flex  relative h-full sm:mt-10  w-full ">
      <div className="xl:w-2/3 max-xl:hidden flex justify-center">
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

      <div className=" lg:mt-10 xl:mt-0   xl:w-1/3 xl:1/2 max-xl:w-full 2xl:pt-10 lg:pt-10 ">
        
        <div className="flex lg:space-x-3 max-xl:bg-gradient-to-l  max-xl:from-cyan-600  xl:space-x-10 items-end p-2 xl:border-b max-sm:mb-5 max-xl:w-full max-xl:flex-col ">
          <h1>portfolio</h1>
          <div className="flex xl:flex xl:flex-col max-xl:justify-end max-md:justify-start max-xl:w-full xl:justify-center 2xl:flex-row">
            <OutlinedButtons
              sx={{
                backgroundColor:
                  activeMenuItem === "projet"
                    ? "rgba(255, 255, 255, 0.1) "
                    : " ",
                color:mode==="light"  ? "black":"",
              }}
              text="fullstack"
              onClick={() => setActiveMenuItem("projet")}
              isActive={activeMenuItem === "projet"}
            />
            <OutlinedButtons
              text="Intégration"
              onClick={() => setActiveMenuItem("integration")}
              sx={{
                backgroundColor:
                  activeMenuItem === "integration"
                    ? " rgba(255, 255, 255, 0.1)"
                    : "",
                    color:mode==="light"  ? "black":"",
              }}
              isActive={activeMenuItem === "integration"}
            />
          </div>
        </div>
        <div className="h-12/12 w-full pb-32  max-sm:pb-96 max-sm:mb-96  border-amber-900 xl:overflow-y-scroll">
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
