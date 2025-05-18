import { useParams } from "react-router-dom";
import podaci from '../podaci/listaRecepata.js';

function SoloRecept() {
    const { id } = useParams();
    const recept = podaci.find(pilula => pilula.id === parseInt(id));

    if(!recept) {
        return <h2>Recept nije pronađen.</h2>;
    }

    return (
        <div className="recept-uvod">
            <h1>{recept.naslov}</h1>
            <div className="slika-opis-sastojci">
                <img src={recept.slika} alt={recept.naslov} />
                <div className="opis-sastojci">
                    <div className="opis">{recept.opis}</div>
                    <div className="sastojci">ovde ce biti sastojci</div>
                </div>
            </div>
        </div>
    )
}

export default SoloRecept;