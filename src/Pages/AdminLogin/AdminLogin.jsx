import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin, fetchUserRole } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await signin(email, password);
      const role = await fetchUserRole(result.user.uid);
      if (role !== "admin") {
        setError("Access denied. Admin credentials required.");
        setLoading(false);
        return;
      }
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Invalid credentials.");
    }
    setLoading(false);
  };

  return (
    <div className="auth-page admin-login">
      <div className="auth-page__bg" />
      <Link to="/" className="auth-page__logo">HUMN<span>·</span></Link>

      <motion.div
        className="auth-page__card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="auth-page__header">
          <div className="auth-page__eyebrow">
            <span className="gold-line" />
            <span>Restricted Access</span>
          </div>
          <h1 className="auth-page__title">Admin Portal</h1>
          <p className="auth-page__subtitle">HUMN Internal Management System</p>
        </div>

        <div className="admin-login__notice">
          <span className="admin-login__notice-icon">⚠</span>
          <span>This area is restricted to authorized personnel only.</span>
        </div>

        {error && (
          <motion.div className="auth-page__error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {error}
          </motion.div>
        )}

        <form className="auth-page__form" onSubmit={handleSubmit}>
          <div className="auth-page__field">
            <label className="auth-page__label">Admin Email</label>
            <input
              type="email"
              className="auth-page__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@humn.com"
              required
            />
          </div>
          <div className="auth-page__field">
            <label className="auth-page__label">Admin Password</label>
            <input
              type="password"
              className="auth-page__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="auth-page__btn admin-login__btn"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Verifying..." : "Access Admin Panel"}
          </motion.button>
        </form>

        <div className="auth-page__footer">
          <Link to="/signin" className="auth-page__footer-link auth-page__footer-link--muted">
            ← Back to user sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
