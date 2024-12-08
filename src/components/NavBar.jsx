import {Link } from "react-router-dom"
import "../pages/styles/navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Weather App</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home </Link></li>
        <Link to="/features"><li>Features</li> </Link>
        <Link to="/about"><li>About</li> </Link>
        
      </ul>
      </nav>
  );
};

export default NavBar;
