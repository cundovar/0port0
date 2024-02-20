import React from "react";

const VideoBackground = ({videoSrc}) => {
    return (
      <div className="video-background rounded-full w-full h-full ">
        <video autoPlay muted loop  style={{ height: '100%' }} >
          <source src={videoSrc} type="video/mp4" />
        
          Your browser does not support the video tag.
        </video>
        <div className="content">
        
        </div>
      </div>
    );
  };
  
  export default VideoBackground;