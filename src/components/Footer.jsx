import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-brand">
          <h2>Nektar <span>Ratish</span></h2>
          <p>Crafting refined experiences — where tradition meets modern creativity.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Bookings</a>
          <a href="#">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>Nektar Ratish</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}
