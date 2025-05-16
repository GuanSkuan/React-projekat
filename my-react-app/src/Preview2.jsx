import { Link } from 'react-router-dom'
import saveti from './podaci/listaSaveta.js'

function Preview2() {

    return(
        <>
            <section className='plava'>
                <h1>=SAVETI=</h1>
                <p className='uvodni-tekst' data-aos="fade-right">
                    Dobrodošli na stranicu "Saveti" – vaše mesto za korisne informacije koje čine kuvanje lakšim i zabavnijim!
                    Ovde ćete pronaći brojne praktične savete i trikove, od pravilnog seckanja povrća do čuvanja
                    svežine namirnica. Bilo da se pitate kako da skuvate savršen pirinač,
                    ispečete meso kao profesionalac ili poboljšate ukus svakodnevnih jela,
                    naši saveti će vam pomoći da uštedite vreme, smanjite greške i uživate više u kuvanju.
                    Stranica je idealna za sve koji žele da nauče nešto novo ili usavrše postojeće kulinarske veštine.
                </p>
                <h2 className='glavni'>-NEKI OD SAVETA-</h2>
            </section>

            <section className='plava-crvena'>
                <div className="saveti-deo">
                    {saveti.filter(saveti => saveti.id <= 3).map((saveti, index) => {
                        const animacija1 = index % 2 === 0 ? "fade-right" : "fade-left";
                        const animacija2 = index % 2 === 0 ? "fade-left" : "fade-right";

                        return(
                            <div className="pravougaonik" key={index}>
                                <img src={saveti.slika} alt={'${saveti.naslov}'} data-aos={animacija1}/>
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