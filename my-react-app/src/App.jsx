import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Header"
import Preview from "./Preview";
import Uvod from "./Uvod";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return(
    <>
      <Header/>
      <Uvod/>
      <Preview/>
    </>

  );
}

export default App;
