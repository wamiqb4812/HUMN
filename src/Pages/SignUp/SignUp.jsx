import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    setLoading(true);
    try {
      await signup(email, password, "user");
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else {
        setError("Something went wrong. Please try again.");
      }
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
            <span>Join HUMN</span>
          </div>
          <h1 className="auth-page__title">Create Account</h1>
          <p className="auth-page__subtitle">Begin your olfactory journey</p>
        </div>

        {error && (
          <motion.div className="auth-page__error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
          <div className="auth-page__field">
            <label className="auth-page__label">Confirm Password</label>
            <input
              type="password"
              className="auth-page__input"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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
            {loading ? "Creating account..." : "Create Account"}
          </motion.button>
        </form>

        <div className="auth-page__footer">
          <p className="auth-page__footer-text">
            Already a member?{" "}
            <Link to="/signin" className="auth-page__footer-link">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
