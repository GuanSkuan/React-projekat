import rucak from './images/uvodna2.jpg'
import slikatest from './images/uvodna1.jpg'
import random from './images/dezert.jpg'

import { Link } from 'react-router-dom';

function KarticeRecepti() {

    const pilule = [
        {
            slika: rucak,
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
        {
            slika: rucak,
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
        {
            slika: rucak,
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
        {
            slika: rucak,
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
        {
            slika: rucak,
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
        {
            slika: rucak,
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
        {
            slika: rucak,
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
            <section className='plava-crvena'>
                <h1>=RECEPTI=</h1>
                <p className='uvodni-tekst' data-aos="fade-right">
                    Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane,
                    do specijaliteta koji će oduševiti goste. Pored klasične pretrage recepata po nazivima i
                    kategorijama, nudimo vam i jedinstvenu mogućnost da unesete sastojke koje imate kod kuće,
                    a naš sistem će vam odmah predložiti recepte koji ih sadrže. Bilo da ste početnik
                    u kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete,
                    korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!
                </p>

                <div className="recepti-deo">
                    {pilule.map((pilule, index) => {

                        const vrstaAnimacije = index % 2 === 0 ? "fade-right" : "fade-left";
                    
                        return(
                            <div key={index} data-aos={vrstaAnimacije}>
                                <div className="pilula">
                                    <img src={pilule.slika} alt='Slika ${index}' />
                                    <h3>{pilule.naslov}</h3>
                                    <p>{pilule.opis}</p>
                                </div>
                            </div>
                        )
                    })}                    
                </div>

                <div className='' data-aos="fade-up">
                    <button><Link to="/saveti">-Pogledaj savete-</Link></button> 
                </div>
            </section>                
        </>
    );
}

export default KarticeRecepti;