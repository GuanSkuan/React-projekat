import { Link } from 'react-router-dom'
import saveti from './podaci/listaSaveta.js'

function Preview2() {

    return(
        <>
            <section className='plava'>
                <h1>=SAVETI=</h1>
                <p className='uvodni-tekst' data-aos="fade-right">
                    Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane,
                    do specijaliteta koji će oduševiti goste. Pored klasične pretrage recepata po nazivima i
                    kategorijama, nudimo vam i jedinstvenu mogućnost da unesete sastojke koje imate kod kuće,
                    a naš sistem će vam odmah predložiti recepte koji ih sadrže. Bilo da ste početnik
                    u kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete,
                    korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!
                </p>
                <h2 className='glavni'>-NEKI OD SAVETA-</h2>
            </section>

            <section className='plava-crvena'>
                <div className="saveti-deo">
                    {saveti.filter(saveti => saveti.id <= 3).map((saveti, index) => {
                        const animacija1 = index % 2 === 0 ? "fade-right" : "fade-left";
                        const animacija2 = index % 2 === 0 ? "fade-left" : "fade-right";

                        return(
                            <div className="pravougaonik" key={index}>
                                <img src={saveti.slika} alt={'${saveti.naslov}'} data-aos={animacija1}/>
                                <div className='pravougaonik-tekst' data-aos={animacija2}>
                                    <h3>{saveti.naslov}</h3>
                                    <p>{saveti.opis}</p>                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div data-aos="fade-up">
                    <button><Link to={"/saveti"}>-Pogledaj sve-</Link></button> 
                </div>
            </section>        
        </>
    );
}

export default Preview2