import rucakk from './images/uvodna2.jpg'

function Preview() {
    const pilule = [
        
    ]

    return(
        <>
            <section className="preview-deo">
                <h1>=RECEPTI=</h1>
                <p className='uvodni-tekst'>
                    Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane,
                    do specijaliteta koji će oduševiti goste. Pored klasične pretrage recepata po nazivima i
                    kategorijama, nudimo vam i jedinstvenu mogućnost da unesete sastojke koje imate kod kuće,
                    a naš sistem će vam odmah predložiti recepte koji ih sadrže. Bilo da ste početnik
                    u kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete,
                    korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!
                </p>                
                <h2>-Neki od mnogobrojnih recepata-</h2>
            </section>

            <section className="crvena-plava">
                <div className="pilula">
                    <img src={rucakk} alt="gratauu" />
                    <h2>BOGUS SA MNOGO BOGUSA UNUTRA</h2>
                    <p>bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus </p>
                </div>
            </section>      
        </>
      
    );
}

export default Preview;