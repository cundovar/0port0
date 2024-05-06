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
         <div className={`w-full loadingpage h-full absolute  border-orange-600 z-50 flex justify-center items-center 
                         ${isVisible ? ' ' :'invisiblePerso  ' }`}>
            <div className={`xl:w-1/4 lg:2/4  ${isVisible ? 'transition-opacity transition-height' : ''}`}>
<h1 >
            <TipeWriter text={text} delay={100}/>

</h1>
        
            </div>
      </div>
        </>
    )
}


export default LoadingPage