import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';

import animacija from './images/animacija.json';
import recepti from './podaci/listaRecepata.js';
import search from './images/search.svg';

const Pretraga = () => {
    const [pretraga, setPretraga] = useState("");
    const [vrstaObroka, setVrstaObroka] = useState("");

    const location = useLocation();

    useEffect(() => {
        if (location.state?.vrsta) {
            setVrstaObroka(location.state.vrsta);
        }
    }, [location.state]);

    const filtriraniRecepti = recepti.filter((recept) => {
        const text = pretraga.toLowerCase();

        const tekstualniMatch =
            recept.naslov.toLowerCase().includes(text) ||
            recept.opis.toLowerCase().includes(text) ||
            recept.sastojci.some((sastojak) =>
                sastojak.naziv.toLowerCase().includes(text)
            );

        const vrstaMatch = !vrstaObroka || recept.vrsta === vrstaObroka;

        return tekstualniMatch && vrstaMatch;
    });

    return (
        <>
            <div className="filteri">
                <button onClick={() => setVrstaObroka(vrstaObroka === "doručak" ? "" : "doručak")} className={vrstaObroka === "doručak" ? "aktivno" : ""}>Doručak</button>
                <button onClick={() => setVrstaObroka(vrstaObroka === "ručak" ? "" : "ručak")} className={vrstaObroka === "ručak" ? "aktivno" : ""}>Ručak</button>

                <div className="pretraga">
                    <img src={search} alt="Search" />
                    <input
                        type="text"
                        value={pretraga}
                        onChange={(e) => setPretraga(e.target.value)}
                        placeholder="Pretraga..."
                    />
                </div>

                <button onClick={() => setVrstaObroka(vrstaObroka === "večera" ? "" : "večera")} className={vrstaObroka === "večera" ? "aktivno" : ""}>Večera</button>
                <button onClick={() => setVrstaObroka(vrstaObroka === "dezert" ? "" : "dezert")} className={vrstaObroka === "dezert" ? "aktivno" : ""}>Dezert</button>
            </div>

            <div className="recepti-deo">
                {filtriraniRecepti.length > 0 ? (
                    filtriraniRecepti.map((pilule, index) => {
                        const vrstaAnimacije = index % 2 === 0 ? "fade-right" : "fade-left";
                        return (
                            <div key={pilule.id} data-aos={vrstaAnimacije}>
                                <Link to={`/recepti/${pilule.id}`} className="pilula" data-recept-id={pilule.id}>
                                    <img src={pilule.slika} alt={`Slika ${index}`} />
                                    <h3>{pilule.naslov}</h3>
                                    <p>{pilule.opis}</p>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <div className="animacija">
                        <Lottie animationData={animacija} loop={true} />
                        <h2><strong>-NEMA REZULTATA-</strong></h2>
                    </div>
                )}
            </div>

            <div data-aos="fade-up">
                <button><Link to="/saveti">-Pogledaj savete-</Link></button>
            </div>
        </>
    );
};

export default Pretraga;
