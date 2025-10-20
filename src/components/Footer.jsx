export default function Footer() {
  return (
    <footer className="footer-section">
      <p>© {new Date().getFullYear()} Nektar Ratish. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
}
