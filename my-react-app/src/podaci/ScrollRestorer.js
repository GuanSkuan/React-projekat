import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function ScrollRestorer({ children }) {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    //Fix za AOS animacije, bez ovoga se sve animacije aktiviraju pre vremena
    
    const timeout = setTimeout(() => {
      AOS.refreshHard();
      setReady(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
      setReady(false); 
    };
  }, [pathname]);

  return ready ? children : null;
}