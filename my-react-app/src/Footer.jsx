import { Link } from "react-router-dom";

function Footer() {
    return(
        <section className="kraj">
            <footer>
                <ul className="prva-vrsta">
                    <li className="naziv1"><strong>-NAVIGACIONI MENI-</strong></li>
                    <li><Link to="/">-Početna-</Link></li>
                    <li><Link to="/recepti">-Recepti-</Link></li>
                    <li><Link to="/saveti">-Saveti-</Link></li>
                    <li><Link to="/o-nama">-O nama-</Link></li>
                </ul>
                <ul className="druga-vrsta">
                    <li className="naziv2"><strong>-OBROCI-</strong></li>
                    <li><Link to="">-Doručak-</Link></li>
                    <li><Link to="">-Ručak-</Link></li>
                    <li><Link to="">-Večera-</Link></li>
                    <li><Link to="">-Dezert-</Link></li>
                </ul>
                <ul className="prva-vrsta">
                    <li className="naziv1"><strong>-DRUŠTVENE MREŽE-</strong></li>
                    <li><a href="https://www.facebook.com/" target="_blank">-Facebook-</a></li>
                    <li><a href="https://www.x.com/" target="_blank">-Twitter/X-</a></li>
                    <li><a href="https://www.tiktok.com/" target="_blank">-TikTok-</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank">-Instagram-</a></li>
                    <li><a href="https://www.youtube.com/" target="_blank">-YouTube-</a></li>
                    <li><a href="https://www.reddit.com/" target="_blank">-Reddit-</a></li>
                </ul>
                <ul className="druga-vrsta">
                    <li className="naziv2"><strong>-KONTAKT-</strong></li>
                    <li><a href="">-Sertifikat-</a></li>
                    <li><Link to="/o-nama">-O nama-</Link></li>
                    <li><Link to="">-066 123 4567-</Link></li>
                </ul>
                <div>&copy; {new Date().getFullYear()} NomNomNomNom</div>
            </footer>
        </section>
    );
}

export default Footer