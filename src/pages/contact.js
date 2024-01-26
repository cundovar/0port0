import React from "react";
import { NavLink } from "react-router-dom";


const Contact=()=>{


    return(
        
        <div className="w-full flex   2xl:pr-10">


          <div className="w-1/3 flex justify-center items-center h-full">
            <div className="w-96 h-96 shadow-2xl  flex justify-center items-center">
                         <div className=" shadow-2xl  w-56 h-56 bg-red-950">
                          <img src="images/moi.jpg" alt="photo présentation"/>
                         </div>
            </div>
          </div>
          <div className="w-2/3  flex flex-col justify-center">
            <div className="mb-10  border-b">
            <h1 className="  ">contact</h1>

            </div>
        <div className="flex  max-md:w-full max-md:flex-col max-md:space-y-5 max-md:mt-5   justify-between item-center ">
          <div className="w-1/2  max-md:w-full space-y-5 max-md:flex max-md:flex-col max:md:justify-center max-md:bg-cyan-100 max-md:p-1 ">
            <div className=" p-3 pl-0">
              <p className="text-2xl">JAVIER VARAS</p>
              <p className="text-xl">
                intégrateur-Devéloppeur front-end-Freelance
              </p>
            </div>
            <div className="hover:text-slate-400">
              <NavLink to="/">
                <p>https://pix.varascundo.com/</p>
              </NavLink>
            </div>
            <p className="text-xl">Paris 20</p>
          </div>

          <div className="w-1/2  max-md:w-full space-y-5">
            <div className="border hover:bg-cyan-100 p-3 flex text-6xl">
              <div className="w-1/12  max-sm:mr-2">
                {/* <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl text-pink-300"
                /> */}
              </div>
              <div className="text-xl">06 23 84 84 45</div>
            </div>
            <div className="border hover:bg-cyan-100 p-3 flex">
              <div className="w-1/12 max-sm:mr-2 ">
                {/* <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="text-xl text-pink-300"
                />
            */}
            </div>
              <div>
                {" "}
                <a
                  className="hover:text-slate-400"
                  href="mailto: varas.cundo@gmail.com"
                >
                  {" "}
                  varas.cundo@gmail.com
                </a>{" "}
              </div>
            </div>
            <div className="border hover:bg-cyan-100 p-3 flex  ">
              <div className="w-1/12 max-sm:mr-2">
                {/* <a href="https://www.linkedin.com/in/facundo-varas/">
                  <i className="fa-brands pink  fa-linkedin fa-xl text-pink-300"></i>
                </a> */}
              </div>
              <div>Mon profil LinkedIn</div>
            </div>
          </div>
        </div>

          </div>

        <div>
        </div>
      </div>
       
    )
}

export default Contact