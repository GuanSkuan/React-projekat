import Header from "../Header";
import KarticeRecepti from "../KarticeRecepti";
import Footer from "../Footer";

function Recepti() {
  return (
    <>
      <Header />
      <section className="plava-crvena">
        <KarticeRecepti />
      </section>
      <Footer />
    </>
  );
}

export default Recepti;
