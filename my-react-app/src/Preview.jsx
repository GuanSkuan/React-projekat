import { Link } from 'react-router-dom'
import pilule from './podaci/listaRecepata.js'

function Preview() {

    return(
        <>
            <section className="preview-deo">
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
                <h2 className='glavni'>-NEKI OD RECEPATA-</h2>
            </section>

            <section className="crvena-plava">
                {pilule.filter(pilule => pilule.id <= 3).map((pilule, index) => {

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
                })}
            </section>

            <div data-aos="fade-up">
                <button><Link to={"/recepti"}>-Pogledaj sve-</Link></button> 
            </div>                 
        </>
    );
}

export default Preview;