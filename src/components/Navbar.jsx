import { Link, NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
import logo from "../assets/logo.jfif";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo and Title */}
        <div className="navbar-left">
          <img src={logo} alt="Nektar Ratish logo" className="navbar-logo" />
          <h1 className="navbar-title">Nektar Ratish</h1>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/bookings" className="nav-link">Bookings</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </nav>

        {/* Call-to-action */}
        <div className="navbar-cta">
          <Link to="/bookings" className="book-now-btn">Order Now</Link>
        </div>
      </div>
    </header>
  );
}
