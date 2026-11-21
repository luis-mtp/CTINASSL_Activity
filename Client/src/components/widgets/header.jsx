import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="navbar">
      <a href="/#home" className="nav-logo">
        <span className="logo-green">SHELF</span>
        <span className="logo-dark">LY.</span>
      </a>

      <nav className="nav-right">
        <ul className="nav-links">
          <li><a href="/#home">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <Link to="/login" className="btn-join-nav">
          Join
        </Link>
      </nav>
    </header>
  );
}

export default Header;