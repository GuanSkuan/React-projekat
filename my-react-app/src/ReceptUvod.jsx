import { useParams } from "react-router-dom";
import podaci from './podaci/listaRecepata.js';

function ReceptUvod() {
    const { id } = useParams();
    const recept = podaci.find(pilula => pilula.id === parseInt(id));

    if(!recept) {
        return <h2>Recept nije pronađen.</h2>;
    }

    return (
        <div className="recept-uvod">
            <h1>{recept.naslov}</h1>
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
                                <strong>{recept.kalorije}</strong>
                            </div>
                            <div>
                                <strong>Porcije:</strong>
                            </div>
                            <div className="brojevi">
                                <strong>{recept.porcije}</strong>
                            </div>
                            <div>
                                <strong>Vreme:</strong>
                            </div>
                            <div className="brojevi">
                                <strong>{recept.vreme}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReceptUvod;