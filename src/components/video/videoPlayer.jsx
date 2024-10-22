import React from "react";


const VideoPlayer=({videoSrc})=>{
    return(
        <div className="h-full  ">

        <video controls muted autoPlay   style={{ height: '100%' }} >
            <source src={videoSrc}  type="video/mp4"/>
        </video>


        </div>
    )
}

export default VideoPlayer