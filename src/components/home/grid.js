import React, { Component } from "react";
import CarouselPresentation from "./carouselPresentation";
import CardCrea1 from "../cardCrea/cardCrea";
import integration from "../../classObject/portfolio/objectIntegrateur";
import CardCrea from "../../classObject/cardCea/cardcea";
import CardCreaContainer from "../accueil/cardCreacontainer";
import PortfolioModel from "../../classObject/portfolio/modelPortfolio";
import VideoBackground from "../video/videoBackground";
import { NavLink } from "react-router-dom";
import {
  ButtonAccueilApropos,
  ButtonAccueilCOntact,
  ButtonAccueilPorfolio,
} from "../common/button/button";

const Grid = () => {
  const integrationData = [
    new PortfolioModel({
      id: 0,
      type: "tailwind,javascript",
      titre: "Page d'accueil",
      tekno: "react,tailwind",
      lien: "https://espace.varascundo.com/",
      lienCode: "https://github.com/cundovar/tourism-spacial",
      description:
        "Projet react. Sources issues d'un fichier json. Maquettes figma",
      imageSrc: "/images/portfolio/etang/etang1.PNG",
      titreHover: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      alt: "",
      video: "",
    }),
  ];

  return (
    <>
      <main>
        <section className="main-grid">
          <div className="grid-item zero ">
            <div className="imgNav">
              <i id="cloud1" className="cloud protest-strike-regular">
                <h1 className="">JAVASCRIPT</h1>
              </i>

              <i id="cloud2" className="cloud">
                <h1 className="">REACT</h1>
              </i>

              <i id="cloud3" className="cloud">
                <h1 className="">WORDPRESS</h1>
              </i>
              <i id="cloud7" className="cloud">
                <h1 className="">FIGMA</h1>
              </i>

              <i id="cloud8" className="cloud">
                <h1 className="">PIXEL</h1>
              </i>

              <i id="cloud9" className="cloud">
                <h1 className=" text-3xl ">CONST</h1>
              </i>

              <i id="cloud4" className="cloud">
                <h1 className="">CLASSNAME</h1>
              </i>
              <i id="cloud4" className="cloud">
                <h1 className="">TAILWIND</h1>
              </i>

              <i id="cloud5" className="cloud">
                <h1 className="">HTML5</h1>
              </i>

             
            </div>
          </div>
          <div className="grid-item un z-50">
           
            <NavLink to="/apropos">
            
              <ButtonAccueilApropos />
            </NavLink>
          </div>
          <div className="grid-item deux relative flex  ">
         
            <NavLink to="/contact">
         
              <ButtonAccueilCOntact />
            </NavLink>
          </div>
          <div className="grid-item trois cursor-pointer ">
            <div className="grid-item medium  flex flex-col   relative ">
         
              <NavLink to="/portfolio">
              
                <ButtonAccueilPorfolio />
              </NavLink>
            </div>
          </div>
         
          <div className="grid-item text1  p-5 max-sm:p-2   overflow-hidden  relative flex justify-center items-center p- ">
            {/* <img className="rounded-xl"src="/images/portfolio/magi/magi0.PNG"/> */}
            <p className="text-xl text-justify">
              Enthousiaste et passionné par le monde du développement web, je
              suis Javier, un intégrateur web et développeur front-end.
            </p>
          </div>
      
       
       
        </section>
      </main>
      <CardCrea1 />
    </>
  );
};
export default Grid;
