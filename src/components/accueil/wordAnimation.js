import React from "react";



const WordAnimation=()=>{



    return(
        <>
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
        </>
    )
}

export default WordAnimation