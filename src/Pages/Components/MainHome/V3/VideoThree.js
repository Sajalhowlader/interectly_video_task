import React from "react";
import ReactPlayer from "react-player";

const VideoThree = () => {
  return (
    <section>
      <div className="vPageOneControler">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=BQOxZevyU3E"
          playing
          controls
          loop={true}
          autoplay={true}
          width="50%"
          height="100vh"
        />
        <div className="redirectBtn campingBtn">
          <button>Sing up for free webinar</button>
        </div>
      </div>
    </section>
  );
};

export default VideoThree;
