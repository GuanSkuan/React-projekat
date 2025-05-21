import Header from "../Header";
import Pretraga from "../Pretraga";
import Footer from "../Footer";

function Recepti() {
  return (
    <>
      <Header />
      <section className="plava-crvena">
        <h1>=RECEPTI=</h1>
          <p className='uvodni-tekst' data-aos="fade-left">
            Na stranici "Recepti" otkrićete raznovrsnu kolekciju jela – od jednostavnih,
            svakodnevnih recepata do ukusnih specijaliteta za posebne prilike.
            Svaki recept je pažljivo opisan sa jasnim koracima i detaljima koji će vam pomoći da
            kuvanje bude uspešno i bez stresa. Možete lako pretraživati recepte po nazivu, kategoriji,
            ili čak na osnovu sastojaka koje imate kod kuće. Samo označite šta imate u frižideru,
            a mi ćemo vam predložiti šta možete da pripremite. Bilo da kuvate za sebe,
            porodicu ili goste, ovde ćete pronaći inspiraciju za svaki obrok.
          </p>
        <Pretraga />
      </section>
      <Footer />
    </>
  );
}

export default Recepti;
