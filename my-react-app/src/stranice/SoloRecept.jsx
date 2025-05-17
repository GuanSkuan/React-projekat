import { useParams } from "react-router-dom";
import podaci from '../podaci/listaRecepata.js';

function SoloRecept() {
    const { id } = useParams();
    const recept = podaci.find(pilula => pilula.id === parseInt(id));

    if(!recept) {
        return <h2>Recept nije pronađen.</h2>;
    }

    return (
        <div className="recept">
            <img src={recept.slika} alt={recept.naslov} />
            <div className="recept-uvod">
                <h2>{recept.naslov}</h2>
                <p>{recept.opis}</p>
            </div>
        </div>

    )
}

export default SoloRecept;