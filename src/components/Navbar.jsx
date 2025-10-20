import { Link } from "react-router-dom";
import "../styles/components/navbar.css";
import logo from "../assets/logo.jfif"; // ✅ Correct logo import

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Nektar Ratish Logo" className="navbar-logo" />
        <h1 className="navbar-title">Nektar Ratish</h1>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}
