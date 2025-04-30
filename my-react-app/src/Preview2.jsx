import savet1 from './images/pasta.jpg'
import savet2 from './images/noz.jpg'
import savet3 from './images/beli luk.jpg'

function Preview2() {

    const saveti = [
        {
            slika: savet1,
            naslov: "-NEKI SAVET-",
            opis: "Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane"
        },
        {
            slika: savet2,
            naslov: "-NEKI SAVET-",
            opis: "Bilo da ste početniku kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete, korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!"
        },
        {
            slika: savet3,
            naslov: "-NEKI SAVET-",
            opis: "Bilo da ste početniku kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete, korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje! korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu."
        },
    ]

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
                    {saveti.map((saveti, index) => (
                        <div key={index}>
                            <div className="pravougaonik">
                                <img src={saveti.slika} alt='Slika ${index}' data-aos="fade-right"/>
                                <div className='pravougaonik-tekst' data-aos="fade-left">
                                    <h3>{saveti.naslov}</h3>
                                    <p>{saveti.opis}</p>                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up">
                    <button>-Pogledaj sve-</button> 
                </div>
            </section>        
        </>
    );
}

export default Preview2