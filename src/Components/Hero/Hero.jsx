import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-grain" />
      <div className="hero__bg-gradient" />

      <div className="hero__container">
        {/* Left */}
        <div className="hero__left">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <span className="gold-line" />
            <span className="hero__eyebrow-text">Luxury Fragrance</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            HUMN
          </motion.h1>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
          >
            Where scent meets soul.
          </motion.p>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
          >
            Each bottle holds a story — distilled from rare botanicals,
            ancient resins, and the quiet poetry of living. Wear something
            that remembers you.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="hero__btn hero__btn--primary"
              onClick={scrollToCollection}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Collection
            </motion.button>
            <motion.button
              className="hero__btn hero__btn--ghost"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Story
            </motion.button>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[["12+", "Signatures"], ["94%", "Pure Ingredients"], ["∞", "Memories"]].map(([num, label]) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-num">{num}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <div className="hero__image-wrapper">
            <motion.div
              className="hero__bottle-glow"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="hero__bottle"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 400" className="hero__bottle-svg" xmlns="http://www.w3.org/2000/svg">
                {/* Neck */}
                <rect x="84" y="30" width="32" height="60" rx="4" fill="url(#neckGrad)" />
                {/* Cap */}
                <rect x="78" y="18" width="44" height="20" rx="6" fill="url(#capGrad)" />
                {/* Cap top */}
                <rect x="88" y="10" width="24" height="10" rx="3" fill="url(#capGrad)" />
                {/* Body */}
                <path d="M55 100 Q40 130 40 200 Q40 300 100 320 Q160 300 160 200 Q160 130 145 100 Z" fill="url(#bodyGrad)" />
                {/* Glass highlight */}
                <path d="M65 120 Q58 160 60 220 Q62 260 70 280" stroke="rgba(255,255,255,0.18)" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M80 108 Q74 140 76 180" stroke="rgba(255,255,255,0.12)" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Label area */}
                <rect x="62" y="160" width="76" height="90" rx="4" fill="rgba(0,0,0,0.25)" />
                <text x="100" y="192" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="13" fontWeight="300" letterSpacing="6" fill="rgba(240,235,227,0.9)">HUMN</text>
                <line x1="74" y1="200" x2="126" y2="200" stroke="rgba(201,169,110,0.6)" strokeWidth="0.5" />
                <text x="100" y="218" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" fontSize="6" letterSpacing="4" fill="rgba(201,169,110,0.7)">NOIR · EDP</text>
                <text x="100" y="234" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" fontSize="5" letterSpacing="2" fill="rgba(168,152,128,0.6)">50 ML</text>
                {/* Bottom */}
                <ellipse cx="100" cy="318" rx="60" ry="10" fill="url(#bottomGrad)" opacity="0.7" />
                <defs>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2a2520" />
                    <stop offset="30%" stopColor="#3d3028" />
                    <stop offset="60%" stopColor="#1e1b17" />
                    <stop offset="100%" stopColor="#0f0e0c" />
                  </linearGradient>
                  <linearGradient id="neckGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2a2520" />
                    <stop offset="50%" stopColor="#4a4030" />
                    <stop offset="100%" stopColor="#1e1b17" />
                  </linearGradient>
                  <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c9a96e" />
                    <stop offset="40%" stopColor="#e0c98a" />
                    <stop offset="100%" stopColor="#9e8057" />
                  </linearGradient>
                  <linearGradient id="bottomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3d3028" />
                    <stop offset="100%" stopColor="#1e1b17" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="hero__bottle-shadow" />
          </div>

          <motion.div
            className="hero__floating-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <span className="hero__floating-tag-label">New Arrival</span>
            <span className="hero__floating-tag-name">HUMN Noir</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
