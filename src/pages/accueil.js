import react from "react"
import Grid from "../components/home/grid"
import VideoBackground from "../components/video/videoBackground"



const Accueil=()=>{



    return(
        <>
        <div className="w-full sm:h-full  flex items-center relative justify-center">
            <div className=" w-full flex justify-center items-center sm:h-full  ">

<div className="absolute opacity-35 -top-20 rounded-3xl max-sm:hidden -right-96">
<VideoBackground videoSrc={"./video/space.mp4"}/> 
</div>
{/* <div className="absolute opacity-25 overflow-hidden  -bottom-48 rounded-3xl max-sm:hidden -left-96">
<VideoBackground videoSrc={"./video/magi.mp4"}/> 
</div> */}
              
        <Grid/>

        

            </div>

        </div>

        </>
    )
}


export default Accueil