import ReceptUvod from "../ReceptUvod";
import Footer from "../Footer";
import ReceptSavet from "../ReceptSavet";

function SoloRecept() {

    return (
        <>
            <section className="plava-crvena">
                <ReceptUvod />
                <ReceptSavet />
            </section>
            <Footer />
        </>
    );
}

export default SoloRecept;