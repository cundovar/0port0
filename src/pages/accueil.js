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

      <div className=" w-full xl:p-20 h-full flex justify-center items-center  ">
        <div className="absolute opacity-35 -top-20 rounded-3xl max-sm:hidden -right-96">
          <VideoBackground videoSrc={"./video/space.mp4"} />
        </div>

        <WordAnimation />
      </div>
    </div>
    </>
  );
};

export default Accueil;
