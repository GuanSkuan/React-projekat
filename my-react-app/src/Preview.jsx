import { Link } from 'react-router-dom'
import pilule from './podaci/listaRecepata.js'

function Preview() {

    return(
        <>
            <section className="preview-deo">
                <h1>=RECEPTI=</h1>
                <p className='uvodni-tekst' data-aos="fade-right">
                    Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane,
                    do specijaliteta koji će oduševiti goste. Pored klasične pretrage recepata po nazivima i
                    kategorijama, nudimo vam i jedinstvenu mogućnost da unesete sastojke koje imate kod kuće,
                    a naš sistem će vam odmah predložiti recepte koji ih sadrže. Bilo da ste početnik
                    u kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete,
                    korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!
                </p>
                <h2 className='glavni'>-NEKI OD MNOGOBROJNIH RECEPATA-</h2>
            </section>

            <section className="crvena-plava">
                {pilule.filter(pilule => pilule.id <= 3).map((pilule, index) => {

                    const vrstaAnimacije = index % 2 === 0 ? "fade-right" : "fade-left";
                
                    return(
                        <div key={pilule} data-aos={vrstaAnimacije}>  {/*dodat div jer AOS unistava scale iz nekog razloga ako se ne odradi ovako*/}
                            <div className="pilula">
                                <img src={pilule.slika} alt='${pilule.naslov}' />
                                <h3>{pilule.naslov}</h3>
                                <p>{pilule.opis}</p>
                            </div>
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