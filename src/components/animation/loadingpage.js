import React, { useEffect, useState } from "react";
import TipeWriter from "../../utils/typeWriter";


const LoadingPage=()=>{
    const text="Artisant du web... "
    const [isVisible,setIsVisible]=useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
    
        return () => clearTimeout(timeout);
      }, []);
    
    return(
        <>
         <div className={`w-full loadingpage h-full absolute z-50 flex justify-center items-center 
                         ${isVisible ? 'visible max-lg:invisible ' :'invisiblePerso ' }`}>
            <div className="w-1/4">
<h1>
            <TipeWriter text={text} delay={100}/>

</h1>
        
            </div>
      </div>
        </>
    )
}


export default LoadingPage