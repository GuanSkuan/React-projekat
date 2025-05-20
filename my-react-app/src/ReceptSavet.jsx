import { useParams } from "react-router-dom";
import podaci from './podaci/listaRecepata.js';
import { Link } from 'react-router-dom';

function ReceptSavet() {
    const { id } = useParams();
    const recept = podaci.find(pilula => pilula.id === parseInt(id));

    return (
        <>
            <div className="priprema-padding">
                <div className="priprema-savet">
                    <div className="priprema">
                        {recept.priprema}
                    </div>
                    <div className="savet-za-pripremu">
                        <h3>-SAVET-</h3>
                        {recept.savet}
                    </div>
                </div>
            </div>

            <div data-aos="fade-up">
                <button><Link to={"/recepti"}>-Vrati se nazad-</Link></button> 
            </div>
        </>
    )
}

export default ReceptSavet;