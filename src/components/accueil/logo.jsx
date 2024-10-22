import React from "react";




const Logo=()=>{

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

    return(

        <>
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

        
        </>
    )
}

export default Logo