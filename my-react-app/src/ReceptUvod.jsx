import { useParams } from "react-router-dom";
import CountUp from 'react-countup';

import podaci from './podaci/listaRecepata.js';

function ReceptUvod() {
    const { id } = useParams();
    const recept = podaci.find(pilula => pilula.id === parseInt(id));

    return (
        <div className="recept-uvod">
            <h1 data-aos="fade-down">{recept.naslov}</h1>
            <div className="slika-opis-sastojci">
                <img src={recept.slika} alt={recept.naslov} data-aos="fade-right"/>
                <div className="opis-sastojci-kalorije">
                    <div className="opis" data-aos="fade-left">
                        {recept.opis}
                    </div>
                    <div className="sastojci-kalorije">
                        <ul className="sastojci" data-aos="fade-up">
                            {recept.sastojci.map((sastojak, index) => (
                                <li key={index}>
                                    {sastojak.naziv}: {sastojak.kolicina}{sastojak.jedinica}
                                </li>
                            ))}
                        </ul>
                        <div className="kalorije-porcije-vreme" data-aos="fade-left">
                            <div>
                                <strong>Kalorije:</strong>
                            </div>
                            <div className="brojevi">
                                <strong><CountUp end={recept.kalorije} duration={4} /></strong>
                            </div>
                            <div>
                                <strong>Porcije:</strong>
                            </div>
                            <div className="brojevi">
                                <strong><CountUp end={recept.porcije} duration={4} /></strong>
                            </div>
                            <div>
                                <strong>Vreme:</strong>
                            </div>
                            <div className="brojevi">
                                <strong><CountUp end={recept.vreme} duration={4} />min</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReceptUvod;