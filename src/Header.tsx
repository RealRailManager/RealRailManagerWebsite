import "./Global.css";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Real Rail Manager</h1>
        <nav className="nav">
          <p>Install</p>
          <p>Contact</p>
          <p>About</p>
          <p>Donate</p>
          <p>Mod author?</p>
        </nav>
      </div>
    </header>
  );
}