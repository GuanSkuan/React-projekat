import { useState } from 'react';
import { Link } from 'react-router-dom';

import Lottie from 'lottie-react';

import animacija from './images/animacija.json';
import recepti from './podaci/listaRecepata.js';
import search from './images/search.svg';

const Pretraga = () => {
    const [pretraga, setPretraga] = useState("");

    const filtriraniRecepti = recepti.filter((recept) => {
        const text = pretraga.toLowerCase();

        return (
            recept.naslov.toLowerCase().includes(text) ||
            recept.opis.toLowerCase().includes(text) ||
            recept.sastojci.some((sastojak) =>
                sastojak.naziv.toLowerCase().includes(text)
            )
        );

    });

    return (
        <>
            <div className='pretraga'>
                <img src={search} />
                <input type="text" value={pretraga} onChange={(e) => setPretraga(e.target.value)} placeholder="Pretraga..."/>
            </div>

            <div className="recepti-deo">
                {filtriraniRecepti.length > 0 ? (
                    filtriraniRecepti.map((pilule, index) => {

                        const vrstaAnimacije = index % 2 === 0 ? "fade-right" : "fade-left";
                    
                        return(
                            <div key={pilule.id} data-aos={vrstaAnimacije}>
                                < Link to={`/recepti/${pilule.id}`} className="pilula" data-recept-id={pilule.id}>
                                    <img src={pilule.slika} alt={`Slika ${index}`} />
                                    <h3>{pilule.naslov}</h3>
                                    <p>{pilule.opis}</p>
                                </Link>
                            </div>
                        )
                    })
                ) : (
                    <div className='animacija'>
                        <Lottie animationData={animacija} loop={true} />
                        <h2><strong>-NEMA REZULTATA-</strong></h2>
                    </div>
                )}
            </div>

            <div data-aos="fade-up">
                <button><Link to="/saveti">-Pogledaj savete-</Link></button> 
            </div>            
        </>
    )
}

export default Pretraga;