import prva from './images/uvodna1.jpg'
import druga from './images/uvodna2.jpg'

function Uvod() {
    const krugovi = [
        {slika: prva, text: "gratauu"},
        {slika: druga, text: "gra"},
        {slika: prva, text: "gratauuuuu"},
    ]

    return(
        <section className='kontejner-krugova'>
            {krugovi.map((krug, index) =>(
                <div key={index} className='krug' data-id={index}>
                    <img src={krug.slika} alt={"Slika ${index}"}/>
                    <p>{krug.text}</p>
                </div>
            ))}
        </section>
    )
}

export default Uvod;