import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Header"
import Uvod from "./Uvod";
import Preview from "./Preview";
import Preview2 from "./Preview2";
import Footer from "./Footer";

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
      <Preview2/>
      <Footer/>
    </>
  );
}

export default App;
