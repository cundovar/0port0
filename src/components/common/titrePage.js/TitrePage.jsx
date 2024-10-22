import React from "react";


const TitrePage=({titre})=>{

    return(
        <div className="flex lg:space-x-3  mt-1 bg-gradient-to-l from-cyan-600 p-1  xl:hidden xl:space-x-10 items-end p-2  max-sm:mb-5 max-md:w-full max-lg:flex-col ">
        <h1>{titre}</h1>
        </div>
    )
}

export default TitrePage