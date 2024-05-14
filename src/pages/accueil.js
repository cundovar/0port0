import react, { useContext } from "react";
import VideoBackground from "../components/video/videoBackground";
import Title from "../components/accueil/title";
import Logo from "../components/accueil/logo";
import IconAccueil from "../components/accueil/icon";
import WordAnimation from "../components/accueil/wordAnimation";
const Accueil = () => {


  return (
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
  );
};

export default Accueil;
