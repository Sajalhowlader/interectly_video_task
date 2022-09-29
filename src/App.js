import { Route, Routes } from "react-router-dom";
import "./App.css";
import VpageOne from "./Pages/Components/MainHome/V1/VpageOne";
import VideoTwo from "./Pages/Components/MainHome/V2/VideoTwo";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<VpageOne/>}/>
        <Route path="/Campaing/structure" element={<VideoTwo />} />
      </Routes>
    </div>
  );
}

export default App;
