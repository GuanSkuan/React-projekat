import { Link } from 'react-router-dom'

import pasta from './images/pasta.jpg'
import seckanje from './images/seckanje.jpg'
import beliLuk from './images/beli luk.jpg'

function Preview2() {

    const saveti = [
        {
            slika: pasta,
            naslov: "-TESTENINA-",
            opis: "Kada skuvaš makarone i procediš ih, nemoj ih ispirati pod mlazom vode, čak i ako ti se čini da su lepljive. Voda spira skrob koji se prirodno oslobađa iz testenine tokom kuvanja. Taj skrob zapravo pomaže da se sos bolje zalepi za makarone i da se ukusi sjedine. Ako ih ispereš, sos će kliziti sa testenine i ukus jela će biti slabiji. Umesto toga, samo ih procedi i odmah ih pomešaj sa toplim sosom. Po želji možeš da dodaš i malo vode u kojoj su se kuvale makarone – ona je puna skroba i odlična je za „vezivanje” sosa."
        },
        {
            slika: seckanje,
            naslov: "-SECKANJE-",
            opis: "Većina ljudi instinktivno drži nož samo za dršku, ali profesionalni kuvari znaju da je mnogo bolje uhvatiti nož bliže oštrici. Palac i kažiprst treba da obuhvate bazu sečiva, s bočnih strana, dok ostatak prstiju drži dršku. Ovakav hvat ti daje mnogo veću kontrolu nad nožem i preciznost prilikom seckanja. Osim toga, ruka se manje zamara, a šanse da se posečeš su manje, jer se nož ponaša stabilnije. Ako još koristiš tzv. „kandža” tehniku sa drugom rukom – gde prste saviješ unazad – seckanje postaje brzo, precizno i bezbedno."
        },
        {
            slika: beliLuk,
            naslov: "-BELI LUK-",
            opis: "Pre nego što počneš da sečeš beli luk, stavi čen ispod širokog dela noža i lagano ga pritisni dlanom dok ne pukne. To će ti pomoći da mnogo lakše skineš ljusku. Ali još važnije – gnječenjem se aktiviraju enzimi u belom luku koji oslobađaju njegov jak, karakterističan miris i ukus. Tako dobijeni luk je intenzivniji i bolje se uklapa u jela. Ako praviš sosove, marinade ili pržiš luk na ulju – ova mala promena u pripremi može ozbiljno da podigne ceo recept."
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
                    {saveti.map((saveti, index) => {
                        const animacija1 = index % 2 === 0 ? "fade-right" : "fade-left";
                        const animacija2 = index % 2 === 0 ? "fade-left" : "fade-right";

                        return(
                            <div className="pravougaonik" key={index}>
                                <img src={saveti.slika} alt={'Slika ${index}'} data-aos={animacija1}/>
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