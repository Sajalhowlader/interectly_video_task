import React, { useState } from "react";
import ReactPlayer from "react-player";
import SIngUp from "../../../SingUp/SIngUp";
const VideoTwo = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="vPageOneControler">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=S0QmO0OAq3w"
          playing
          controls
          loop={true}
          autoplay={true}
          width="50%"
          height="100vh"
        />
        <div className="redirectBtn campingBtn">
          {show ? <SIngUp /> : null}
          {show ? null : (
            <button onClick={() => setShow(!show)}>
              Download "Campaing Structure Guide"
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoTwo;
