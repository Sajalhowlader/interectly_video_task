import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const VpageOne = () => {
    const navigate = useNavigate()
 const handleFirstVideo =()=>{
    navigate('/Campaing/structure')
 }
 const handleSecondVideo = ()=>{
    navigate('/LearnFacebook/basics')
 }
 const handleThirdVideo = ()=>{
    navigate('/3rd/choice')
 }
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
        <div className="redirectBtn">
          <button onClick={handleFirstVideo}>
            <span className="rounded_number">a</span>{" "}
            <span>Campaing structure</span>
          </button>
          <br />
          <button onClick={handleSecondVideo}>
            <span className="rounded_number">b</span>{" "}
            <span>Learn Facebook basics</span>
          </button>
          <br />
          <button onClick={handleThirdVideo}>
            <span className="rounded_number">c</span> <span>3rd choice</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VpageOne;
