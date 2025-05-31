import { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import logo from './images/favicon-logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo" data-aos="fade-down">
        <img src={logo} alt="Cook Drive Logo" />
      </div>

      <nav className="main-nav" data-aos="fade-down">
        <ul>
          <li><Link to="/">-Početna-</Link></li>
          <li><Link to="/recepti">-Recepti-</Link></li>
          <li><Link to="/saveti">-Saveti-</Link></li>
          <li><Link to="/o-nama">-O nama-</Link></li>
        </ul>
      </nav>

      <div className="burger-menu">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      {isOpen && (
        <div className="telefon">
          <Link to="/" onClick={() => setIsOpen(false)}>-Početna-</Link>
          <Link to="/recepti" onClick={() => setIsOpen(false)}>-Recepti-</Link>
          <Link to="/saveti" onClick={() => setIsOpen(false)}>-Saveti-</Link>
          <Link to="/o-nama" onClick={() => setIsOpen(false)}>-O nama-</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
