function Preview2() {

    const saveti = [
        {
            slika: "neka slika",
            naslov: "-NEKI SAVET-",
            opis: "neki opis"
        },
        {
            slika: "neka slika",
            naslov: "-NEKI SAVET-",
            opis: "neki opis"
        },
        {
            slika: "neka slika",
            naslov: "-NEKI SAVET-",
            opis: "neki opis"
        },
    ]

    return(
        <section >
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
    );
}

export default Preview2