import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Pocetna from "./stranice/Pocetna";
import Recepti from "./stranice/Recepti";
import Saveti from "./stranice/Saveti";
import ONama from "./stranice/ONama";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/recepti" element={<Recepti />} />
        <Route path="/saveti" element={<Saveti />} />
        <Route path="/o-nama" element={<ONama />} />
      </Routes>
    </Router>
  );
}

export default App;
