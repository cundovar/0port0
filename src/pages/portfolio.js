import react, { useState } from "react";
import projects from "../classObject/portfolio/objetPortfolio";
import { Link } from "react-router-dom";
import DetailPage from "./detaiPage.js";
import CardCrea1 from "../components/cardCrea/cardCrea.js";
import { Stack } from "@mui/material";
import{ ButtonNavBar, OutlinedButtons} from "../components/common/button/button.js";
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("projet");

  const openDetailPage = (project) => {
    console.log("Ouverture de la page de détails avec le projet :", project);
    setSelectedProject(project);
  };

  const handleClick=()=>{
    console.log("testtt")
    setIsActive(!isActive)
  }

  const closeDetailPage = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex  border-lime-400 w-full  ">
      <div className="lg:w-1/2 flex sm:w-full">
        <DetailPage project={selectedProject} onClose={closeDetailPage} />
      </div>

      <div className="  border-red-600 w-1/2  2xl:pt-10  xl:pt-40  ">
        <div className="flex space-x-28 items-end p-2 border-b ">
          <h1>portfolio</h1>
          <div>
            {/* <ul className="flex space-x-11 justify-arround items-center"> */}

            <Stack direction="row" spacing={2}>
              
              <OutlinedButtons 
               sx={{ backgroundColor: activeMenuItem === "projet" ? "rgba(255, 255, 255, 0.1)" : "transparent",color:"wheat" }}
              text="projet"  
                onClick={() => setActiveMenuItem("projet")}
                
                isActive={activeMenuItem === "projet"} 
                />
                    <OutlinedButtons text="intégration"
                                     onClick={() => setActiveMenuItem("integration")}
                                     sx={{ backgroundColor: activeMenuItem === "integration" ?" rgba(255, 255, 255, 0.1)": "transparent",color:"wheat" }}
                                     isActive={activeMenuItem === "integration"} 
                                     />
            </Stack>

           

              {/* <li
                className={`cursor-pointer ${
                  activeMenuItem === "projet" ? "font-bold" : ""
                }`}
                onClick={() => setActiveMenuItem("projet")}
              >
                projet
              </li>
              <li
                className={`cursor-pointer ${
                  activeMenuItem === "integration" ? "font-bold" : ""
                }`}
                onClick={() => setActiveMenuItem("integration")}
              >
                intégration
              </li>
            </ul> */}
          </div>
        </div>
        <div className="h-full w-full pb-32   overflow-y-scroll">
          {activeMenuItem === "projet" &&
            projects &&
            projects.map((item) => (
              <div
                key={item.id}
                className=" flex   justify-end   2xl:m-10 xl:m-5 "
              >
                <div
                  className="flex  justify-end w-6/6 space-x-3 xl:visible xl:relative sm:absolute cursor-pointer hover:opacity-100 opacity-50  "
                  onClick={() => openDetailPage(item)}
                >
                  <div className="w-2/3 ">
                    <h2 className=" text-4xl">{item.titre}</h2>
                    <p>{item.tekno}</p>
                  </div>
                  <div className="w-1/3 ">
                    <img className=" " src={item.imageSrc} alt={item.titre} />
                  </div>
                </div>
                <Link
                  to={`/portfolio/detail/${item.id}`}
                  className="flex sm:relative sm:visible  lg:invisible lg:absolute justify-end w-6/6 space-x-3 cursor-pointer hover:opacity-100 border opacity-50  "
                >
                  <div className="w-2/3 ">
                    <h2 className=" text-4xl">{item.titre}</h2>
                    <p>{item.tekno}</p>
                  </div>
                  <div className="w-1/3 ">
                    <img className=" " src={item.imageSrc} alt={item.titre} />
                  </div>
                </Link>
              </div>
            ))}
          {activeMenuItem === "integration" && (
            <div className="flex    flex-col justify-center items-center">
              <CardCrea1 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
