import { Link } from "react-router-dom";
import "../styles/pages/auth.css";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account ✨</h2>
        <p className="auth-subtext">Join Nektar Ratish and start exploring</p>

        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
