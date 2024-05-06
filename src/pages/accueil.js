import react from "react"
import Grid from "../components/home/grid"
import VideoBackground from "../components/video/videoBackground"
import { Link, NavLink } from "react-router-dom"
import TipeWriter from "../utils/typeWriter"



const Accueil=()=>{



    return(
        <>
        <div className="  w-full  h-full ralative flex items-center relative justify-center">
            <div className="absolute onCommence top-1/2 left-1/2 transform -translate-x-1/2 z-10 max-sm:w-full space-y-2 -translate-y-1/2 text-center " >
           <div className="mb-10">
            <h2>Dev web...</h2>
            <h2>...front-end</h2>

           </div>

              
                <Link to="/apropos" className=" onCommence  z-50">
                <h2 className="onCommence">On commence ? </h2>

                </Link>
               
            </div>
            <div className=" w-full xl:p-20 h-full flex justify-center items-center  ">
<div className="absolute opacity-35 -top-20 rounded-3xl max-sm:hidden -right-96">
<VideoBackground videoSrc={"./video/space.mp4"}/> 
</div>

<div className="imgNav max-xl:h-11/12  flex shadow-2xl w-full h-full ">
           
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


            <div className="imgNav w-full max-xl:h-11/12 h-full flex">
          

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
                <h1 className=" text-3xl ">const=({'{'}index{'}'})=&gt;{'{'}index{'}'}</h1>
           
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
            <div className="h-1/2 w-3/4 max-sm:w-1/2 shadow-2xl absolute top-96 right-0 "></div>

            <div className="max-xl:h-11/12 left-0 top-0 absolute imgNav w-full  h-full flex">
         

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

        </div>

        </>
    )
}


export default Accueil