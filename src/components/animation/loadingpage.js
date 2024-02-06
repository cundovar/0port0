import React, { useEffect, useState } from "react";
import TipeWriter from "../../utils/typeWriter";


const LoadingPage=()=>{
    const text="Artisant du web. je suis curieux et passionné."
    const [isVisible,setIsVisible]=useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, []);
    
    return(
        <>
         <div className={`w-full h-full absolute bg-black z-50 flex justify-center items-center border
                         ${isVisible ? 'visible fade-in' :'hidden fade-out' }`}>
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