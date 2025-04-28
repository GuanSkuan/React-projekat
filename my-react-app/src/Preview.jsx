import rucakk from './images/uvodna2.jpg'
import slikatest from './images/uvodna1.jpg'
import random from './images/dezert.jpg'
function Preview() {
    
    const pilule = [
        {
            slika: rucakk,
            naslov:"-BOGUS SA MNOGO BOGUSA UNUTRA-",
            opis: "bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus bogus"
        },
        {
            slika:slikatest,
            naslov: "-NEKI DRUGI BOGUS, TAKODJE SA BOGUSIMA UNUTRA-",
            opis: "neki drugi bogusi neki drugi bogusi neki drugi bogusi neki drugi bogusi"
        },
        {
            slika:random,
            naslov: "-NIKAD DOSTA BOGUSA-",
            opis: "JOSSSSSSSSS BOGUSA AAAAAAAAAA BOGUSI SVUGDEEEEEEE TOOOOOOOO"
        },
    ]

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
                {pilule.map((pilule, index) => {

                    const vrstaAnimacije = index % 2 === 0 ? "fade-right" : "fade-left";
                
                    return(
                        <div key={index} data-aos={vrstaAnimacije}>  {/*dodat div jer AOS unistava scale iz nekog razloga ako se ne odradi ovako*/}
                            <div className="pilula">
                                <img src={pilule.slika} alt='Slika ${index}' />
                                <h3>{pilule.naslov}</h3>
                                <p>{pilule.opis}</p>
                            </div>
                        </div>
                    )
                })}
                <div data-aos="fade-up">
                    <button>-Pogledaj sve-</button> 
                </div>
            </section>      
        </>
    );
}

export default Preview;