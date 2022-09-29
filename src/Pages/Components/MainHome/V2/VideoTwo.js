import React from "react";
import ReactPlayer from "react-player";

const VideoTwo = () => {
  return (
    <section>
      <div className="vPageOneControler">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=oITDcIjJBlY"
          playing
          controls
          loop={true}
          autoplay={true}
          width="50%"
          height="100vh"
        />
        <div className="redirectBtn campingBtn">
          <button>Download "Campaing Structure Guide"</button>
        </div>
      </div>
    </section>
  );
};

export default VideoTwo;
