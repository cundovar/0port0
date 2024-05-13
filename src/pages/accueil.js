import react, { useContext } from "react";
import Grid from "../components/home/grid";
import VideoBackground from "../components/video/videoBackground";
import { Link, NavLink } from "react-router-dom";
import TipeWriter from "../utils/typeWriter";
import { ColorModeContext } from "../App";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const Accueil = () => {
  const { mode } = useContext(ColorModeContext);

  const logo1 = [
    "./images/logo/js.png",
    "./images/logo/React.png",
    "./images/logo/wordpress.png",
    "./images/logo/tailwind.png",
  ];
  const logo2 = [
    "./images/logo/Bootstrap.png",
    "./images/logo/php.png",
    "./images/logo/sass.png",
    "./images/logo/api platform.png",
  ];

  return (
    <>
      <div className="  w-full  h-full ralative  flex items-center relative justify-center">
        <div className="absolute 2xl:top-2 bottom-0 right-0 space-x-5 2xl:right-1/2 max-sm:hidden flex">
          <a href="https://github.com/cundovar" target="_blank">
            <GitHubIcon className="opacity-50 hover:opacity-100 cursor-pointer  largeIcon" />
          </a>

          <a href="mailto: varas.cundo@gmail.com" target="_blank">
            <EmailIcon className=" opacity-50 hover:opacity-100 cursor-pointer largeIcon" />
          </a>
        </div>
        <div className="absolute max-sm:hidden left-20 xl:space-x-5 max-xl:flex-col  max-xl:space-y-5 flex opacity-65">
          {logo1.map((img) => (
            <div className="w-14 h-14   ">
              <img
                src={img}
                className="obcject-contain h-full w-full"
                alt="logo_accueil"
              />
            </div>
          ))}
        </div>
        <div className="absolute max-sm:hidden flex max-xl:flex-col  right-20  max-xl:space-y-5 xl:space-x-5 opacity-65">
          {logo2.map((img) => (
            <div className="w-14 h-14   ">
              <img
                src={img}
                className="obcject-contain h-full w-full"
                alt="logo_accueil"
              />
            </div>
          ))}
        </div>
        <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 z-10 max-sm:w-full space-y-2 -translate-y-1/2 text-center ">
          <div className="mb-10 space-y-5">
            <h2
              className={`text-6xl  caveat-h2 ${
                mode === "light" ? "  text-pink-700" : " text-pink-300"
              } `}
            >
              Dev web...
            </h2>
            <h2
              className={`text-6xl  caveat-h2 ${
                mode === "light" ? "  text-pink-700" : " text-pink-300"
              } `}
            >
              ...front-end
            </h2>
          </div>

          <div className="relative   ">
            <Link to="/apropos" className="   animation_boutn z-50">
              <button className="border p-2 rounded-xl hover:opacity-100">
                <h2 className="onCommence ">On commence ? </h2>
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-full xl:p-20 h-full flex justify-center items-center  ">
          <div className="absolute opacity-35 -top-20 rounded-3xl max-sm:hidden -right-96">
            <VideoBackground videoSrc={"./video/space.mp4"} />
          </div>

          <div className="imgNav max-xl:h-11/12 max-sm:hidden sm:hidden flex shadow-2xl w-full h-full ">
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
              <h1 className="">tailWind</h1>
            </i>

            <i id="cloud9" className="cloud">
              <h1 className=" text-3xl ">CONST</h1>
            </i>

            <i id="cloud5" className="cloud">
              <h1 className=" text-pink-600 caveat text-lg ">Bootstrap</h1>
            </i>
          </div>

          <div className="imgNav sm:hidden w-full max-xl:h-11/12 h-full ">
            <i id="cloud2" className="cloud">
              <h1 className="text-sm">REACT</h1>
            </i>

            <i id="cloud3" className="cloud">
              <h1 className=" text-violet-800 ">PHP 7.4</h1>
            </i>
            <i id="cloud7" className="cloud">
              <h1 className="">TWIG</h1>
            </i>

            <i id="cloud8" className="cloud">
              <h1 className="">PIXEL</h1>
            </i>

            <i id="cloud9" className="cloud">
              <h1 className=" text-3xl ">
                const=({"{"}index{"}"})=&gt;{"{"}index{"}"}
              </h1>
            </i>

            <i id="cloud5" className="cloud">
              <h1 className="">Scss</h1>
            </i>
          </div>

          <div className="absolute h-48 bottom-0 max-sm:hidden  overflow-hidden w-10/12 max-xl:h-11/12 ">
            <i id="cloud2" className="cloud">
              <h1 className="text-sm">REACT</h1>
            </i>

            <i id="cloud3" className="cloud">
              <h1 className=" text-violet-800 ">PHP 7.4</h1>
            </i>
            <i id="cloud7" className="cloud">
              <h1 className="">TWIG</h1>
            </i>

            <i id="cloud8" className="cloud">
              <h1 className="">api</h1>
            </i>

            <i id="cloud9" className="cloud">
              <h1 className=" text-3xl ">WORDPRESS</h1>
            </i>

            <i id="cloud5" className="cloud">
              <h1 className="">Scss</h1>
            </i>
          </div>

          <div className="max-xl:h-11/12 left-0 sm:hidden top-0 absolute imgNav w-full  h-full flex">
            <i id="cloud2" className="cloud">
              <h1 className="">REACT</h1>
            </i>

            <i id="cloud3" className="cloud">
              <h1 className="">WORDPRESS</h1>
            </i>
            <i id="cloud7" className="cloud">
              <h1 className="">StoryBook</h1>
            </i>

            <i id="cloud8" className="cloud">
              <h1 className="">className</h1>
            </i>

            <i id="cloud9" className="cloud">
              <h1 className=" text-3xl ">object</h1>
            </i>

            <i id="cloud5" className="cloud">
              <h1 className="">HTML5</h1>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
