import { Link } from 'react-router-dom'

import dorucak from './images/uvodna1.jpg'
import rucak from './images/uvodna2.jpg'
import vecera from './images/vecera.jpg'
import dezert from './images/dezert.jpg'

function Uvod() {
    const krugovi = [
        {slika: dorucak, text: "-Doručak-", vrsta: "doručak"},
        {slika: dezert, text: "-Dezert-", vrsta: "dezert"},
        {slika: rucak, text: "-Ručak-", vrsta: "ručak"},
        {slika: vecera, text: "-Večera-", vrsta: "večera"},
    ]

    return(
        <>
            <h1>=DOBRODOŠLI U COOK DRIVE=</h1>
            <section className='kontejner-krugova'>
                {krugovi.map((krug, index) => (
                        <Link to="/recepti" state={{ vrsta: krug.vrsta }} key={index} className='krug' data-id={index} >
                            <img src={krug.slika} alt={`Slika ${index}`}/>
                            <div className={`linija linija-${index}`}></div>
                            <p>{krug.text}</p>
                        </Link>
                ))}
            </section>
            <section className='uvodni-deo'>
                <p className='uvodni-tekst' data-aos="fade-right">
                    Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane,
                    do specijaliteta koji će oduševiti goste. Pored klasične pretrage recepata po nazivima i
                    kategorijama, nudimo vam i jedinstvenu mogućnost da unesete sastojke koje imate kod kuće,
                    a naš sistem će vam odmah predložiti recepte koji ih sadrže. Bilo da ste početnik
                    u kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete,
                    korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!
                </p>
            </section>
        </>

    )
}

export default Uvod;