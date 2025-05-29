import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollRestorer from "./podaci/ScrollRestorer";

import Pocetna from "./stranice/Pocetna";
import Recepti from "./stranice/Recepti";
import Saveti from "./stranice/Saveti";
import ONama from "./stranice/ONama";
import SoloRecept from "./stranice/SoloRecept";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
      <Router basename="/React-projekat">
        <ScrollRestorer>
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/recepti" element={<Recepti />} />
            <Route path="/recepti/:id" element={<SoloRecept />} />
            <Route path="/saveti" element={<Saveti />} />
            <Route path="/o-nama" element={<ONama />} />
          </Routes>
        </ScrollRestorer>
      </Router>
  );
}

export default App;
