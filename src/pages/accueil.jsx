import react, { useContext } from "react";
import VideoBackground from "../components/video/videoBackground";
import Title from "../components/accueil/title";
import Logo from "../components/accueil/logo";
import IconAccueil from "../components/accueil/icon";
import WordAnimation from "../components/accueil/wordAnimation";
import { Helmet } from "react-helmet";


const Accueil = () => {


  return (
    <>


    <Helmet>
      <title>accueil/varascundo.com</title>
      <meta name="description" content="Bienvenue sur la page d'accueil de mon portfolio de développeur web."/>
      <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Accueil",
        "description": "Venez lire mes compétences en developpement web en Reactjs, javascript, intégartion de maquettes et en fullstack",
        "creator": {
          "@type": "Person",
          "name": "Facundo Varas"
        }
       
      }
    `}
  </script>
    </Helmet>
   
    <div className="  w-full  h-full ralative  flex items-center relative justify-center">

      <IconAccueil />
      <Logo />
      <Title />

      <div className=" w-full xl:p-20 h-full flex  justify-center items-center  ">
        <div className="absolute top-20 right-20  rounded-3xl max-sm:right-40 max-sm:top-20 ">
          <div className="relative shadow-cyan-500 shadow-2xl">
        <img className="h-36 opacity-40" src="./images/accueil/tv.webp" alt="tv"/>
          <div className="absolute opacity-65 top-5 shadow-4xl  h-24 w-[8.5rem] ml-4 ">
          <VideoBackground videoSrc={"./video/vid.mp4"} />
     
          </div>
          </div>
     
        </div>

        <WordAnimation />
      </div>
       
    </div>
    </>
  );
};

export default Accueil;
