import Detail from "./Detail";
import Home from "./Home";
import Splash from "./Splash";
import './style/App.css'
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-cont">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
