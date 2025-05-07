import pasta from './images/pasta.jpg'
import seckanje from './images/seckanje.jpg'
import beliLuk from './images/beli luk.jpg'
import pirinac from './images/pirinac.jpg'
import meso from './images/meso.jpg'
import zacini from './images/zacini.jpg'
import jaja from './images/jaja.jpg'
import povrce from './images/povrce.jpg'
import palacinke from './images/palacinke.jpg'
import cuvanjeHrane from './images/cuvanje hrane.jpg'
import ulje from './images/ulje.jpg'
import krompir from './images/krompir.jpg'
import noz from './images/noz.jpg'
import brziObroci from './images/brzi obroci.jpg'
import frizider from './images/frizider.jpg'
import hleb from './images/hleb.jpg'
import reciklaza from './images/reciklaza.jpg'
import salata from './images/salata.jpg'
import steak from './images/steak.jpg'
import riba from './images/riba.jpg'
import rerna from './images/rerna.jpg'
import piletina from './images/piletina.jpg'
import cia from './images/cia.jpg'
import pica from './images/pica.jpg'

import { Link } from 'react-router-dom'

function KarticeSaveti() {

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
        {
            slika: pirinac,
            naslov: "-PIRINAČ-",
            opis: "Mnogi preskoče ovaj korak, ali ispiranje pirinča hladnom vodom pre kuvanja je ključno za dobar rezultat. Pirinač je često prekriven viškom skroba koji, ako ga ne ispereš, tokom kuvanja stvori lepljivu masu i zgrudva zrna. Ispiraj ga sve dok voda ne postane skoro providna – obično je potrebno 3 do 5 ispiranja. Tako ćeš dobiti rastresit i vazdušast pirinač, savršen za priloge, prženje ili salate. Osim toga, kod nekih vrsta (npr. basmati), ispiranje pomaže i da zrna ostanu duga i cela."
        },
        {
            slika: meso,
            naslov: "-MESO-",
            opis: "Ako meso direktno iz frižidera staviš na vrelu površinu, dogodiće se dve stvari: spolja će se brzo ispeći (ili čak prepeći), dok će unutrašnjost ostati hladna, pa ćeš dobiti neujednačeno pečeno meso. Zato je najbolje da meso, bilo da je piletina, svinjetina ili biftek, ostaviš da odstoji na sobnoj temperaturi 15–30 minuta pre termičke obrade. Tako će se ravnomernije skuvati ili ispeći, biće sočnije i ukusnije. Ovo pravilo posebno važi za debele komade."
        },
        {
            slika: zacini,
            naslov: "-ZAČINI-",
            opis: "Pre nego što dodaš začine kao što su kumin, korijander, paprika, biber ili kari u jelo, probaj da ih tostiraš na suvom tiganju 30 do 60 sekundi, dok ne počnu da mirišu. Tostiranje oslobađa eterična ulja u začinima i čini ih mnogo intenzivnijim i aromatičnijim. Ovo je trik koji koristi indijska i bliskoistočna kuhinja, ali se može primeniti i u mnogim drugim jelima. Samo pazi da ne zagore – čim osetiš jak miris, skini ih sa vatre i odmah koristi."
        },
        {
            slika: jaja,
            naslov: "-JAJA-",
            opis: "Ako želiš savršeno kuvana jaja koja se lako ljušte, izvadi ih iz frižidera barem 15 minuta pre kuvanja da dostignu sobnu temperaturu. Hladna jaja stavljena direktno u vrelu vodu često pucaju zbog naglog temperaturnog šoka. Osim toga, belance se može odvojiti od žumanca i iscuriti kroz pukotinu. Kada su jaja sobne temperature, ravnomernije se kuvaju i imaju manji rizik od pucanja. A kad su gotova, odmah ih prebaci u posudu s hladnom vodom i ostavi nekoliko minuta – ljuska će lakše spadati."
        },
        {
            slika: povrce,
            naslov: "-POVRĆE-",
            opis: "Povrće poput brokolija, šargarepe ili boranije često postane gnjecavo i bledo ako se prekuva. Umesto toga, koristi tehniku blanširanja: ubaci povrće u ključalu vodu na 1 do 3 minuta, zatim ga odmah prebaci u činiju sa ledenom vodom. Ovaj postupak „zaključa” boju, teksturu i ukus, a i zadržava više vitamina i minerala. Blanširano povrće možeš kasnije pržiti, peći, ubaciti u salatu ili zamrznuti. Plus – izgleda mnogo lepše na tanjiru."
        },
        {
            slika: palacinke,
            naslov: "-PALAČINKE-",
            opis: "Za mekane i glatke palačinke, ključno je da prvo sjediniš jaja, mleko i ulje, pa tek onda postepeno dodaješ brašno uz stalno mešanje – tako se izbegnu grudvice. Testo treba da odstoji bar 15–30 minuta pre prženja, da bi brašno upilo tečnost i smesa postala ujednačenija. Tiganj neka bude dobro zagrejan, ali ne previše vruć, i premaži ga s malo ulja ili putera pre svake palačinke za ujednačeno pečenje."
        },
        {
            slika: cuvanjeHrane,
            naslov: "-ČUVANJE HRANE-",
            opis: "Stavljanje vruće hrane u frižider deluje praktično, ali može da podigne temperaturu unutar cele komore, što stvara uslove da se druge namirnice pokvare brže. Osim toga, promene temperature mogu oštetiti sam frižider. Umesto toga, ostavi jelo da se hladi na sobnoj temperaturi (do 2 sata je bezbedno), a zatim ga prebaci u frižider. Ako želiš da ubrzaš hlađenje, stavi posudu u veću činiju s hladnom vodom ili ledom. Hrana će se sačuvati bolje i duže, bez rizika po zdravlje."
        },
        {
            slika: ulje,
            naslov: "-ULJE-",
            opis: "Maslinovo ulje jeste zdravo i ukusno, ali nije idealno za kuvanje na visokim temperaturama jer brzo počinje da dimi i gubi korisna svojstva. Tačka dimljenja (temperatura na kojoj ulje počinje da sagoreva) kod ekstra devičanskog maslinovog ulja je oko 160–190°C, što je prenisko za duboko prženje ili prženje na visokoj vatri. Umesto toga koristi ulja neutralnog ukusa i više tačke dimljenja, kao što su suncokretovo, ulje od kikirikija ili ulje od avokada. Tako ćeš izbeći gorki ukus, a jelo će biti ukusnije i bezbednije."
        },
        {
            slika: krompir,
            naslov: "-KROMPIR-",
            opis: "Ako želiš da ti krompir bude spolja zlatno-hrskav, a iznutra mekan kao puter, ključ je u dvostrukoj obradi. Iseckaj krompir na komade i kratko ga prokuvaj 5–7 minuta u slanoj vodi dok ne omekša spolja. Zatim ga procedi i blago „prodrmaj” u cediljki da se ivice oštete – te neravne ivice će postati ekstra hrskave prilikom pečenja. Potom ga začini i ispeci u unapred zagrejanoj rerni sa malo ulja. Rezultat je krompir kakav često vidiš u restoranima, ali kod kuće."
        },
        {
            slika: noz,
            naslov: "-NOŽEVI-",
            opis: "Možda zvuči kontraintuitivno, ali tupi noževi su zapravo opasniji od oštrih. Kad je nož tup, moraš da koristiš više sile, što povećava šansu da sklizne i poseče ti ruku. Oštar nož seče lako i precizno, zahteva manje pritiska i bolje reaguje na tvoje pokrete. Dobar kuhinjski nož treba redovno da se oštri – možeš to raditi sam uz brusni kamen, šiljač ili kod profesionalca. Ako uložiš u jedan kvalitetan nož i održavaš ga, ceo proces kuvanja postaje lakši i prijatniji."
        },
        {
            slika: brziObroci,
            naslov: "-BRZI OBROCI-",
            opis: "Uvek imaj osnovne zamrznute sastojke pri ruci – povrće (poput graška, brokolija, kukuruza), kuvani pirinač, piletinu u trakama, pa čak i iseckan beli luk. Sve to možeš kupiti već pripremljeno ili sam zamrznuti. Kad nemaš vremena da kuvaš, dovoljno je da baciš sastojke u tiganj i dodaš začine ili sos – večera je gotova za 10 minuta. Plus: zamrznuto povrće često zadrži više hranljivih materija jer se blanšira i zamrzava odmah posle branja."
        },
        {
            slika: frizider,
            naslov: "-ORGANIZACIJA FRIŽIDERA-",
            opis: "Vrata frižidera su najtopliji deo jer se stalno otvaraju. Ako tamo držiš mleko, jaja ili jogurt, brzo će se pokvariti. Umesto toga, čuvaj ih u srednjem delu frižidera gde je temperatura najkonzistentnija. Vrata koristi za stvari koje se sporo kvare, poput senfa, sosa ili pića. U fioke spusti povrće i voće – i ne mešaj ih jer voće ispušta gasove koji ubrzavaju kvarenje povrća. U ostavi koristi providne kutije ili korpice da vidiš sve što imaš i lakše pronađeš sastojke."
        },
        {
            slika: hleb,
            naslov: "-HLEB I TESTO-",
            opis: "Ako praviš domaći hleb, pecivo ili picu, nemoj žuriti. Brzo dizanje na toplom mestu jeste zgodno, ali daje slabiji ukus i teksturu. Umesto toga, pusti testo da se diže polako, čak i u frižideru preko noći. Tako se razvija bolja struktura i kompleksniji ukus. Ako koristiš instant kvasac, ne moraš da ga aktiviraš unapred – ali topli sastojci (ne vrući!) pomažu da kvasac brzo proradi. I uvek koristi vagu za brašno, ne šolje – tačnost je ključ u testu."
        },
        {
            slika: reciklaza,
            naslov: "-RECIKLAŽA HRANE-",
            opis: "Ostaci hrane ne moraju da budu dosadni. Pečeni krompir od juče možeš pretvoriti u krompir salatu, kuvano meso možeš dodati u sendvič, tortilju ili supu, a višak testenine samo zagrej sa malo sira i mleka – instant makaroni & cheese. Povrće koje više nije sveže koristi za čorbu ili povrćni bujon. Tako ne bacaš novac, čuvaš resurse i štediš vreme. Bonus: napravi jednu „čišćenje frižidera” večeru svake nedelje – samo improvizuj sa stvarima koje moraju da se pojedu."
        },
        {
            slika: salata,
            naslov: "-SALATA I DRESING-",
            opis: "Jedna od najčešćih grešaka kod salata je da se začine prerano – rezultat je gnjecava i tužna salata umesto sveže i hrskave. Dresing (posebno ako sadrži sirće ili limunov sok) omekšava listove zelene salate čim ga dodaš, pa sve počne da „venu”. Pravilo je: sve pripremi unapred, ali začini tik pre serviranja. Ako pakuješ salatu za poneti, stavi dresing u posebnu posudicu."
        },
        {
            slika: steak,
            naslov: "-STEAK-",
            opis: "Biftek nije komplikovan, ali zahteva strpljenje i poštovanje osnovnih pravila. Prvo, meso mora biti na sobnoj temperaturi pre pečenja – hladan steak će se spolja spaliti, a unutra ostati sirov. Kad ga staviš na vreo tiganj ili roštilj, nemoj ga dirati 2–3 minuta – pusti da se stvori korica. Zatim ga okreni samo jednom – ne okreći stalno. Pečenje zavisi od debljine i željene jačine, ali prosečan steak od 2,5 cm debljine biće medium rare za oko 3–4 minuta po strani. Kad ga skineš s vatre, pusti ga da odstoji 5–10 minuta pre sečenja – to omogućava sokovima da se ravnomerno rasporede, Inače svi sokovi će iscureti, i biće suv. I začini samo solju i biberom – dobar steak ne traži ništa više."
        },
        {
            slika: riba,
            naslov: "-RIBA-",
            opis: "Riba je predivan izvor proteina, ali ako se ne pripremi kako treba, može postati suva i bezukusna. Ključno je ne prepeći je. Pecite ribu na srednje jakoj vatri, oko 2–4 minuta sa svake strane, zavisno od debljine fileta. Pokušaj da je ne okrećeš više puta – to pomaže da ostane sočna. Takođe, limun i začine dodaj tek na kraju, nakon pečenja. Limun može da osveži ukus, ali ako ga staviš pre nego što je riba gotova, može da postane previše kisela."
        },
        {
            slika: rerna,
            naslov: "-RERNA-",
            opis: "Rerna mora biti potpuno zagrejana pre nego što počneš da pečeš bilo šta – kolače, hleb, meso ili povrće. Ako staviš jelo u hladnu ili nedovoljno zagrejanu rernu, može se desiti da se ispeče neujednačeno, da testo ne naraste ili da korica ostane gnjecava. Većina rerni treba oko 10–15 minuta da dostigne pravu temperaturu. Neke imaju svetlosni indikator ili signal, ali za preciznost je najbolje koristiti mali termometar za rernu. Strpljenje na početku znači bolji rezultat na kraju."
        },
        {
            slika: piletina,
            naslov: "-PILETINA-",
            opis: "Kada pečeš piletinu, najvažniji faktor je da ne prepečeš meso. Piletinu treba peći na srednje jakoj vatri (oko 180–190°C u rerni). Pileći bataci obično traže 35–45 minuta pečenja, dok pileći fileti zahtevaju samo 4–6 minuta po strani ako se peku u tiganju. Ključno je da unutrašnja temperatura mesa dostigne oko 75°C, a najbolje je koristiti termometar za meso kako bi bio siguran. Takođe, uvek je dobro da piletinu pustiš da „odmori” 5–10 minuta pre nego što je isečeš – tako se sokovi ravnomerno raspoređuju i meso ostaje sočno."
        },
        {
            slika: cia,
            naslov: "-ČIA SEMENKE-",
            opis: "Čia semenke su sjajan izvor vlakana, omega-3 masnih kiselina i proteina, ali je važno koristiti ih pravilno. Potapanje čia semenki u tečnost (voda, biljno mleko, jogurt) je ključno, jer one mogu da upiju mnogo tečnosti i izazovu probleme sa varenjem ako se konzumiraju na suvo. Pusti ih da odstoje najmanje 10–15 minuta (ili preko noći) – tako postaju želatinaste, lako svarljive i odlične za dodavanje u smoothie, ovsene pahuljice, jogurt ili čak za pravljenje pudinga."
        },
        {
            slika: pica,
            naslov: "-PICA-",
            opis: "Dobra pica počinje od testa. Koristi brašno tip 00 ili mešavinu sa glatkim brašnom, i ostavi testo da fermentiše najmanje 8 sati (idealno i do 24h) u frižideru. Tako dobijaš elastično testo sa bogatijim ukusom i finom koricom. Pre pečenja, izvadi testo barem sat vremena ranije da omekša. Rernu ugrej na maksimum i koristi pleh ili kamen za picu za najbolji rezultat."
        },
    ]

    return (
        <>
            <section className='plava-crvena'>
                <h1>=SAVETI=</h1>
                <p className='uvodni-tekst' data-aos="fade-right">
                    Na ovom sajtu pronaći ćete veliki broj recepata – od brzih obroka za radne dane,
                    do specijaliteta koji će oduševiti goste. Pored klasične pretrage recepata po nazivima i
                    kategorijama, nudimo vam i jedinstvenu mogućnost da unesete sastojke koje imate kod kuće,
                    a naš sistem će vam odmah predložiti recepte koji ih sadrže. Bilo da ste početnik
                    u kuhinji ili iskusni kuvar u potrazi za inspiracijom, ovde ćete pronaći praktične savete,
                    korisne trikove i ideje koje će obogatiti vašu svakodnevnu ishranu. Prijatno kuvanje!
                </p>
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

                <div className='' data-aos="fade-up">
                    <button><Link to="/recepti">-Pogledaj recepte-</Link></button> 
                </div>

            </section>
        </>
    );
}

export default KarticeSaveti;