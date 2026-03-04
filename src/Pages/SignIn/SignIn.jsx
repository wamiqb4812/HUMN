import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./SignIn.css";

export default function SignIn() {
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
      navigate(role === "admin" ? "/admin-dashboard" : "/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
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
            <span>Welcome Back</span>
          </div>
          <h1 className="auth-page__title">Sign In</h1>
          <p className="auth-page__subtitle">Enter the world of HUMN</p>
        </div>

        {error && (
          <motion.div
            className="auth-page__error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form className="auth-page__form" onSubmit={handleSubmit}>
          <div className="auth-page__field">
            <label className="auth-page__label">Email Address</label>
            <input
              type="email"
              className="auth-page__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="auth-page__field">
            <label className="auth-page__label">Password</label>
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
            className="auth-page__btn"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Entering..." : "Sign In"}
          </motion.button>
        </form>

        <div className="auth-page__footer">
          <p className="auth-page__footer-text">
            New to HUMN?{" "}
            <Link to="/signup" className="auth-page__footer-link">Create an account</Link>
          </p>
          <Link to="/admin-login" className="auth-page__footer-link auth-page__footer-link--muted">
            Admin access →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
