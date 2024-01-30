import React from "react";


const VideoPlayer=({videoSrc})=>{
    return(
        <>

        <video controls>
            <source src={videoSrc}  type="video/mp4"/>
        </video>


        </>
    )
}

export default VideoPlayer