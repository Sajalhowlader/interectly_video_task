import { Route, Routes } from "react-router-dom";
import "./App.css";
import VpageOne from "./Pages/Components/MainHome/V1/VpageOne";
import VideoTwo from "./Pages/Components/MainHome/V2/VideoTwo";
import VideoThree from "./Pages/Components/MainHome/V3/VideoThree";
import VideoFour from "./Pages/Components/MainHome/V4/VideoFour";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<VpageOne/>}/>
        <Route path="/Campaing/structure" element={<VideoTwo />} />
        <Route path="/LearnFacebook/basics" element={<VideoThree />} />
        <Route path="/3rd/choice" element={<VideoFour />} />
      </Routes>
    </div>
  );
}

export default App;
