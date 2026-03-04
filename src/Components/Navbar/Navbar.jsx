import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, userRole, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setMenuOpen(false);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to="/" className="navbar__logo">
        <span className="navbar__logo-text">HUMN</span>
        <span className="navbar__logo-dot">·</span>
      </Link>

      <ul className="navbar__links">
        {["home", "collection", "about", "craft", "contact"].map((item) => (
          <li key={item}>
            <button className="navbar__link" onClick={() => scrollTo(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="navbar__link-underline" />
            </button>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        {currentUser ? (
          <>
            <Link
              to={userRole === "admin" ? "/admin-dashboard" : "/dashboard"}
              className="navbar__action-btn"
            >
              {userRole === "admin" ? "Admin" : "Profile"}
            </Link>
            <button className="navbar__action-btn navbar__action-btn--outline" onClick={handleLogout}>
              Exit
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="navbar__action-btn">Sign In</Link>
            <Link to="/signup" className="navbar__action-btn navbar__action-btn--gold">Join</Link>
          </>
        )}
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {["home", "collection", "about", "craft", "contact"].map((item, i) => (
              <motion.button
                key={item}
                className="navbar__mobile-link"
                onClick={() => scrollTo(item)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
            <div className="navbar__mobile-divider" />
            {currentUser ? (
              <>
                <Link
                  to={userRole === "admin" ? "/admin-dashboard" : "/dashboard"}
                  className="navbar__mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {userRole === "admin" ? "Admin Panel" : "My Profile"}
                </Link>
                <button className="navbar__mobile-link" onClick={handleLogout}>Sign Out</button>
              </>
            ) : (
              <>
                <Link to="/signin" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Sign In</Link>
                <Link to="/signup" className="navbar__mobile-link navbar__mobile-link--gold" onClick={() => setMenuOpen(false)}>Join HUMN</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
