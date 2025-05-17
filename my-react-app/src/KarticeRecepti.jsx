import { Link } from 'react-router-dom';
import pilule from './podaci/listaRecepata.js'

function KarticeRecepti() {

    return(
        <>
            <h1>=RECEPTI=</h1>
            <p className='uvodni-tekst' data-aos="fade-left">
                Na stranici "Recepti" otkrićete raznovrsnu kolekciju jela – od jednostavnih,
                svakodnevnih recepata do ukusnih specijaliteta za posebne prilike.
                Svaki recept je pažljivo opisan sa jasnim koracima i detaljima koji će vam pomoći da
                kuvanje bude uspešno i bez stresa. Možete lako pretraživati recepte po nazivu, kategoriji,
                ili čak na osnovu sastojaka koje imate kod kuće. Samo označite šta imate u frižideru,
                a mi ćemo vam predložiti šta možete da pripremite. Bilo da kuvate za sebe,
                porodicu ili goste, ovde ćete pronaći inspiraciju za svaki obrok.
            </p>

            <div className="recepti-deo">
                {pilule.map((pilule, index) => {

                    const vrstaAnimacije = index % 2 === 0 ? "fade-right" : "fade-left";
                
                    return(
                        <Link to={`/recepti/${pilule.id}`} key={pilule.id} data-aos={vrstaAnimacije}>
                            <div className="pilula" data-recept-id={pilule.id}>
                                <img src={pilule.slika} alt={`Slika ${index}`} />
                                <h3>{pilule.naslov}</h3>
                                <p>{pilule.opis}</p>
                            </div>
                        </Link>
                    )
                })}                    
            </div>

            <div data-aos="fade-up">
                <button><Link to="/saveti">-Pogledaj savete-</Link></button> 
            </div>
        </>
    );
}

export default KarticeRecepti;