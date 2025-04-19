import prva from './images/uvodna1.jpg'
import druga from './images/uvodna2.jpg'

function Uvod() {
    const krugovi = [
        {slika: prva, text: "-Doručak-"},
        {slika: prva, text: "-Večera-"},
        {slika: druga, text: "-Ručak-"},
        {slika: druga, text: "-Dezert-"},
    ]

    return(
         <>
           <section className='kontejner-krugova'>
                {krugovi.map((krug, index) =>(
                    <div key={index} className='krug' data-id={index}>
                        <img src={krug.slika} alt={"Slika ${index}"}/>
                        <div className={`linija linija-${index}`}></div>
                        <p>{krug.text}</p>
                    </div>
                ))}
            </section>
            <section className='uvodni-deo'>
                <p className='uvodni-tekst'>
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