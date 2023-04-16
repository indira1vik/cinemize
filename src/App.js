import Detail from "./Detail";
import Home from "./Home";
import Splash from "./Splash";
import './style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-cont">
      <BrowserRouter basename="/cinemize">
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
