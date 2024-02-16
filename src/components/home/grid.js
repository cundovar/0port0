import React,{ Component } from "react";
import CarouselPresentation from "./carouselPresentation";
import CardCrea1 from "../cardCrea/cardCrea";
import integration from "../../classObject/portfolio/objectIntegrateur";
import CardCrea from "../../classObject/cardCea/cardcea";
import CardCreaContainer from "../accueil/cardCreacontainer";
import PortfolioModel from "../../classObject/portfolio/modelPortfolio";
import VideoBackground from "../video/videoBackground";

const Grid=()=>{

   
  const   integrationData=[
        new PortfolioModel({
      id:0,
      type: "tailwind,javascript",
      titre: "Page d'accueil",
      tekno: "react,tailwind",
      lien: "https://espace.varascundo.com/",
      lienCode: "https://github.com/cundovar/tourism-spacial",
      description: "Projet react. Sources issues d'un fichier json. Maquettes figma",
      imageSrc:"/images/portfolio/etang/etang1.PNG",
      titreHover: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      alt: "",
      video:""
    }),
    ]




return(
    <>
<main>
  <section class="main-grid">
    <div class="grid-item wide">
    <div class="imgNav">

     
<i id="cloud1"  className="cloud protest-strike-regular"><h1 className="">JAVASCRIPT</h1></i>

<i id="cloud2" className="cloud"><h1 className="">REACT</h1></i>

<i id="cloud3" className="cloud"><h1 className="">WORDPRESS</h1></i>
<i id="cloud7" className="cloud"><h1 className="">FIGMA</h1></i>

<i id="cloud8" className="cloud"><h1 className="">PIXEL</h1></i>

<i id="cloud9" className="cloud"><h1 className="">FUNCION</h1></i>

<i id="cloud4" className="cloud"><h1 className="">TAILWIND</h1></i>
<i id="cloud4" className="cloud"><h1 className="">TAILWIND</h1></i>

<i id="cloud5" className="cloud"><h1 className="">HTML5</h1></i>

{/* <i id="cloud6"><h1>react</h1></i> */}



</div>
    </div>
    <div class="grid-item tall">
    <CardCrea dataImage={integrationData[0].imageSrc}/>
    </div>
    <div class="grid-item large ">
        <CarouselPresentation/>
    </div>
    <div class="grid-item tall ">
    <div class="grid-item medium rounded-md overflow-hidden  relative ">

        <VideoBackground videoSrc={"./video/space.mp4"}/>
    </div>
    </div>
    <div class="grid-item small"><h2 className="border p-2 cursor-pointer hover:font-bold invisible">Contact</h2> </div>
    <div class="grid-item medium overflow-hidden  relative flex justify-center items-center ">

        {/* <img className="rounded-xl"src="/images/portfolio/magi/magi0.PNG"/> */}
      <h1>texte</h1>
    </div>
    <div class="grid-item small"><h2 className="border p-2 cursor-pointer hover:font-bold invisible">Contact</h2>  </div>
    <div class="grid-item wide">
    <div class="imgNav">

     
<i id="cloud6"  className="cloud protest-strike-regular"><h1 className="">MATERIAL UI </h1></i>

<i id="cloud7" className="cloud"><h1 className="">FIGMA</h1></i>

<i id="cloud8" className="cloud"><h1 className="">PIXEL</h1></i>

<i id="cloud9" className="cloud"><h1 className="">FUNCION</h1></i>

<i id="cloud4" className="cloud"><h1 className="">TAILWIND</h1></i>

<i id="cloud5" className="cloud"><h1 className="">HTML5</h1></i>
<i id="cloud10" className="cloud"><h1 className="">class</h1></i>

{/* <i id="cloud6"><h1>react</h1></i> */}



</div>


    </div>
    <div class="grid-item small"><h2 className="border p-2 cursor-pointer hover:font-bold invisible">Contact</h2> </div>
  </section>
</main>
<CardCrea1/>
    </>
)
}
export default Grid