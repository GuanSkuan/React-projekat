import GrafikRast from './Grafici/GrafikRast';
import GrafikObroci from './Grafici/GrafikObroci';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

import raketa from './images/raketa.json'
import kuvanje from './images/kuvanje.json'

function OpisFirme() {
    return (
    <>
      <div className='uvod-o-nama'>
        <p className='uvodni-tekst' data-aos="fade-right">
            Sajt "Cook Drive" je nastao 2019. godine iz iskrene ljubavi prema kuvanju.
            Grupa prijatelja i zaljubljenika u kulinarstvo odlučila je da podeli svoje recepte
            i iskustva sa širom zajednicom, verujući da dobra hrana spaja ljude. Od tada, sajt
            je postao mesto gde svako može pronaći inspiraciju – bilo da ste početnik koji tek
            uči osnove kuhinje, ili iskusni kuvar u potrazi za novim idejama. Naša misija je jednostavna:
            da delimo proverene recepte, korisne savete i strast prema hrani,
            na jednom lako dostupnom mestu za sve ljubitelje domaće i kreativne kuhinje.
        </p>

        <div className='animacija'>
            <Lottie animationData={kuvanje} loop={true} />
        </div>
      </div>

        <section className="pocetak-o-nama">
            <h1>-BROJ KORISNIKA-</h1>
            <div className='opis-pocetka-rasta'>
              <p className='uvodni-tekst' data-aos="fade-left">
                  Od trenutka kada smo pokrenuli sajt 2019. godine, broj naših korisnika konstantno raste.
                  Te prve godine, prosečno nas je svakog dana posetilo oko 7.000 ljubitelja kuvanja.
                  Danas, taj broj iznosi čak 94.000 dnevno u proseku za 2025. godinu.
                  Ovaj rast govori o poverenju koje ste nam ukazali, kao i o potrebi za kvalitetnim,
                  domaćim i proverenim receptima. Kroz godine, trudili smo se da unapredimo
                  korisničko iskustvo, uvedemo nove funkcionalnosti i redovno dodajemo sadržaj
                  koji prati savremene kulinarske trendove. Svaki novi korisnik je za nas potvrda
                  da ono što radimo ima smisla – i dodatna motivacija da budemo još bolji.
              </p>

              <div className='grafik-rast'>
                <GrafikRast />
              </div>
            </div>
        </section>

        <section className="kolicina-obroka">
            <h1>-KOLIČINA OBROKA-</h1>
            <div className='opis-grafik-pored'>
              <p className='uvodni-tekst' data-aos="fade-right">
                  Naša baza recepata iz dana u dan sve je bogatija i raznovrsnija.
                  Od samog osnivanja, fokus nam je bio na tome da obuhvatimo sve obroke u toku dana
                  – od brzih i jednostavnih doručaka, preko bogatih ručkova, pa sve do laganih večera
                  i slatkih deserata. Recepti koje delimo dolaze od iskusnih kulinara,
                  ali i od domaćih entuzijasta koji žele da podele svoja omiljena jela.
                  Posebno nam je drago što su mnogi od tih recepata postali omiljeni među korisnicima,
                  često se pripremaju i dele dalje. Planiramo da u narednim godinama još više proširimo
                  kolekciju – sa sezonskim jelima, internacionalnim kuhinjama i tematskim serijalima –
                  kako bi svako mogao da pronađe inspiraciju i obrok po svom ukusu.
              </p>

              <div className='grafik-kolicina'>
                <GrafikObroci />
              </div>
            </div>

            <div data-aos="fade-up">
              <button><Link to={"/recepti"}>-Vidi sve recepte-</Link></button> 
            </div>
        </section>

        <section className="dodati-saveti">
            <h1>-DODAVANJE SAVETA-</h1>
            <div className='opis-grafik-pored'>
              <p className='uvodni-tekst' data-aos="fade-left">
                  Tokom 2022. godine, naš tim je sa ponosom predstavio novu sekciju posvećenu
                  savetima za kuvanje – stranicu koja je donela svežu energiju i dodatnu vrednost
                  celokupnom sajtu. Ova ideja proizašla je iz želje da pored recepata ponudimo i
                  konkretne smernice, trikove i objašnjenja koja mogu pomoći i početnicima i
                  iskusnim kuvarima da unaprede svoje veštine. Od pravilnog seckanja povrća do saveta
                  za pečenje mesa ili čuvanje namirnica, ova sekcija je postala pravi hit među korisnicima.
                  Zahvaljujući savetima, mnogi su postali sigurniji u kuhinji i češće se
                  upuštaju u pripremu novih jela. Oduševljenje korisnika rezultiralo je ogromnim
                  porastom posećenosti i dodatnim motivom za nas da ovu sekciju još više razvijamo.
                  U budućnosti planiramo proširenje saveta sa video tutorijalima, sezonskim vodičima
                  i sadržajem koji će dodatno obogatiti kulinarsko znanje naše zajednice.
              </p>

              <div className='animacija'>
                  <Lottie animationData={raketa} loop={true} />
              </div>
            </div>

            <div data-aos="fade-up">
              <button><Link to={"/saveti"}>-Vidi sve savete-</Link></button> 
            </div>
        </section>
    </>
  );
}
export default OpisFirme;