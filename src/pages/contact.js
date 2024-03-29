import { Skeleton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const item = {
    imageSrc: "images/moi.jpg",
  };

  return (
    <div className="w-full z-20 flex max-lg:flex-col max-lg:items-center justify-center   max-md:pb-40  md:ml-28 overflow-hidden max-md:pt-40 max-lg:mb-10 max-lg:overflow-y-scroll max-sm:mt-9   2xl:pr-10">
      <div className="w-1/3 flex justify-center  max-md:w-full  max-md:mt-56   mt items-center h-full">
        <div className="w-96 h-96 shadow-2xl  flex justify-center  items-center">
          {item ? (
            <div className=" shadow-2xl  w-56 h-56">
              <img src={item.imageSrc} alt="photo présentation" />
            </div>
          ) : (
            <div className=" shadow-2xl  w-56 h-56">
              <Skeleton variant="rectangular" />
            </div>
          )}
        </div>
      </div>
      <div className="w-2/3 max-md:w-full max-md:items-center  max-sm:mt-10 flex flex-col justify-center">
        <div className="mb-10 xl:ml-3  border-b xl:w-2/3 2xl:w-full p-2">
          <h1 className="  ">contact</h1>
        </div>
        <div className="flex  max-md:w-full   max-md:flex-col max-md:space-y-5 max-md:mt-5  max-md:items-center max-md:m-auto   justify-center item-center ">
          <div className="w-1/2  flex justify-center items-center ">
            {/* <div className=" p-3 pl-0">
              <p className="text-2xl">JAVIER VARAS</p>
              <p className="text-xl">
                intégrateur-Devéloppeur front-end-Freelance
              </p>
            </div>
            <div className="hover:text-slate-400 ">
              <NavLink to="/">
                <p>https://pix.varascundo.com/</p>
              </NavLink>
            </div> */}
            <p className="text-xl">Paris 20</p>
          </div>

          <div className="w-1/2  max-md:w-full space-y-5">
            <div className="border hover:bg-cyan-100 hover:text-slate-700 p-3  sm:w-full xl:w-2/3 text-6xl">
              <div className="w-1/12  max-sm:mr-2">
                {/* <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl text-pink-300"
                /> */}
              </div>
              <div className="text-xl opacity-50">
                <PhoneIcon /> 06 23 84 84 45
              </div>
            </div>
            <div className="border hover:bg-cyan-100 hover:text-slate-700  p-3 sm:w-full  xl:w-2/3 ">
              <div className="w-1/12 max-sm:mr-2 ">
                {/* <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="text-xl text-pink-300"
                />
            */}
              </div>
              <div className="opacity-50">
                {" "}
                <a
                  className="hover:text-slate-900"
                  href="mailto: varas.cundo@gmail.com"
                >
                  <EmailIcon /> varas.cundo@gmail.com
                </a>{" "}
              </div>
            </div>
            <div className="border hover:bg-cyan-100 hover:text-slate-700  p-3 sm:w-full xl:w-2/3   ">
                 <a href="https://www.linkedin.com/in/facundo-varas/" target="_blank">
              <div className="w-1/12 max-sm:mr-2">
                 
              </div>
              <div className=" opacity-50 ">
                {" "}
                <LinkedInIcon /> Mon profil LinkedIn
              </div>
                </a> 
            </div>
            <div className="border hover:bg-cyan-100 hover:text-slate-700  p-3 sm:w-full xl:w-2/3   ">
                <a href="https://github.com/cundovar" target="_blank" className="mt-2">
              <div className="w-1/12 max-sm:mr-2">
              
              </div>
              <div className=" opacity-50 ">
                {" "}
                <GitHubIcon /> Mon profil github
              </div>
                </a>
            </div>

          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Contact;
