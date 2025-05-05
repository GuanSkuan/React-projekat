import { Link } from "react-router-dom";

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
        </header>
    );
}

export default Header;
