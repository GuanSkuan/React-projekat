import { Link } from "react-router-dom";
import logo from './images/favicon-logo.png'

function Header() {
    return (
        <header>
            <nav data-aos="fade-down">
                <ul>
                    <li><Link to="/">-Početna-</Link></li>
                    <li><Link to="/recepti">-Recepti-</Link></li>
                    <li><Link to="/saveti">-Saveti-</Link></li>
                    <li><Link to="/o-nama">-O nama-</Link></li>
                </ul>
            </nav>
            <div className="logo" data-aos="fade-down">
                <img src={logo} alt="Cook Drive Logo" />
            </div>
        </header>
    );
}

export default Header;
