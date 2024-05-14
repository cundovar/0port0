import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../App";



const Title=()=>{
    const { mode } = useContext(ColorModeContext);
    return(
        <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 z-10 max-sm:w-full space-y-2 -translate-y-1/2 text-center ">
        <div className="mb-10 space-y-5">
          <h2
            className={`text-6xl   caveat-h2 ${
              mode === "light" ? " text-shadow shadow-pink-700 text-pink-700" : "title_acccueil "
            } `}
          >
            Dev web...
          </h2>
          <h2
            className={`text-6xl  caveat-h2 ${
              mode === "light" ? " text-shadow shadow-pink-700 text-pink-700" : " title_acccueil "
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
    )
}

export default Title