import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__top-line" />

      <div className="footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">HUMN<span>·</span></Link>
          <p className="footer__tagline">Where scent meets soul.</p>
          <p className="footer__brand-desc">
            Luxury fragrances crafted for those who believe that what they wear should say something true.
          </p>
          <div className="footer__socials">
            {["Instagram", "Pinterest", "Twitter"].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                <span>{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Explore</h4>
          <ul className="footer__links">
            {["home", "collection", "about", "craft"].map((item) => (
              <li key={item}>
                <button className="footer__link" onClick={() => scrollTo(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Account</h4>
          <ul className="footer__links">
            <li><Link to="/signin" className="footer__link">Sign In</Link></li>
            <li><Link to="/signup" className="footer__link">Create Account</Link></li>
            <li><Link to="/dashboard" className="footer__link">My Profile</Link></li>
            <li><Link to="/admin-login" className="footer__link">Admin</Link></li>
          </ul>
        </div>

        <div className="footer__col footer__col--wide">
          <h4 className="footer__col-title">Join the Inner Circle</h4>
          <p className="footer__col-desc">
            Receive early access, exclusive releases, and the occasional letter from Grasse.
          </p>
          {subscribed ? (
            <motion.p
              className="footer__subscribed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              You're in. Expect something beautiful.
            </motion.p>
          ) : (
            <form className="footer__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer__input"
                required
              />
              <button type="submit" className="footer__submit">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} HUMN Fragrances. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">Privacy</a>
          <a href="#" className="footer__bottom-link">Terms</a>
          <a href="#" className="footer__bottom-link">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
