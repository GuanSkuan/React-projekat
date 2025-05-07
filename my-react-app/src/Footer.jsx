import { Link } from "react-router-dom";

function Footer() {
    return(
        <section className="kraj">
            <footer>
                <ul className="prva-vrsta">
                    <li><Link to="">gogogo</Link></li>
                    <li><Link to="">wiwiwiwiwi</Link></li>
                    <li><Link to="">ahdoiuh</Link></li>
                    <li><Link to="">fff</Link></li>
                    <li><Link to="">ahdoiuh</Link></li>
                    <li><Link to="">fff</Link></li>
                </ul>
                <ul className="druga-vrsta">
                    <li><Link to="">gogogo</Link></li>
                    <li><Link to="">wiwiwiwiwi</Link></li>
                    <li><Link to="">ahdoiuh</Link></li>
                </ul>
                <ul className="prva-vrsta">
                    <li><Link to="">gogogo</Link></li>
                    <li><Link to="">wiwiwiwiwi</Link></li>
                    <li><Link to="">ahdoiuh</Link></li>
                    <li><Link to="">fff</Link></li>
                    <li><Link to="">ahdoiuh</Link></li>
                    <li><Link to="">fff</Link></li>
                </ul>
                <ul className="druga-vrsta">
                    <li><Link to="">gogogo</Link></li>
                    <li><Link to="">wiwiwiwiwi</Link></li>
                    <li><Link to="">ahdoiuh</Link></li>
                    <li><Link to="">fff</Link></li>
                </ul>
                <div>&copy; {new Date().getFullYear()} NomNomNomNom</div>
            </footer>
        </section>
    );
}

export default Footer