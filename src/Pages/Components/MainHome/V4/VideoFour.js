import React from "react";
import ReactPlayer from "react-player";

const VideoFour = () => {
  return (
    <section>
      <div className="vPageOneControler">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=_ysd-zHamjk"
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

export default VideoFour;
