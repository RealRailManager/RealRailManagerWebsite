import "./Global.css";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link className="logo" to="/">Real Rail Manager</Link>
        <nav className="nav">
          <Link to="/install">Install</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/mod-author">Mod author</Link>
        </nav>
      </div>
    </header>
  );
}