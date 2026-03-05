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

        {/* ── LEFT ── */}
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

        {/* ── RIGHT — Blue glass bottle ── */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <div className="hero__image-wrapper">

            {/* animated glow halo */}
            <motion.div
              className="hero__bottle-glow"
              animate={{ opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* floating bottle */}
            <motion.div
              className="hero__bottle"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 420" className="hero__bottle-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* ── Blue glass body ── */}
                  <linearGradient id="bBody" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#0d4a72" stopOpacity="0.85" />
                    <stop offset="20%"  stopColor="#1a7ab5" stopOpacity="0.90" />
                    <stop offset="48%"  stopColor="#2aa8e0" stopOpacity="0.95" />
                    <stop offset="72%"  stopColor="#1a7ab5" stopOpacity="0.90" />
                    <stop offset="100%" stopColor="#0d4a72" stopOpacity="0.85" />
                  </linearGradient>

                  {/* ── Inner liquid glow ── */}
                  <radialGradient id="bLiquid" cx="42%" cy="38%" r="52%">
                    <stop offset="0%"  stopColor="#55c8f8" stopOpacity="0.55" />
                    <stop offset="50%" stopColor="#1a8acc" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#061420" stopOpacity="0" />
                  </radialGradient>

                  {/* ── Neck ── */}
                  <linearGradient id="bNeck" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#0d4a72" />
                    <stop offset="50%"  stopColor="#1e7ab8" />
                    <stop offset="100%" stopColor="#0d4a72" />
                  </linearGradient>

                  {/* ── Cap — dark matte black like photo ── */}
                  <linearGradient id="bCap" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#1a1a1a" />
                    <stop offset="50%"  stopColor="#2d2d2d" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                  </linearGradient>

                  {/* ── Edge highlight ── */}
                  <linearGradient id="bHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="white" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.05" />
                  </linearGradient>

                  {/* ── Bottom reflection ── */}
                  <linearGradient id="bBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#0d4a72" />
                    <stop offset="50%"  stopColor="#1a7ab5" />
                    <stop offset="100%" stopColor="#0d4a72" />
                  </linearGradient>
                </defs>

                {/* ── Cap (black square top like photo) ── */}
                <rect x="76" y="10" width="48" height="10" rx="3" fill="url(#bCap)" />
                <rect x="70" y="18" width="60" height="30" rx="6" fill="url(#bCap)" />
                {/* cap highlight */}
                <rect x="74" y="20" width="8" height="24" rx="2" fill="rgba(255,255,255,0.06)" />

                {/* ── Neck ── */}
                <rect x="82" y="46" width="36" height="56" rx="3" fill="url(#bNeck)" />
                {/* neck glass highlight */}
                <rect x="86" y="48" width="7" height="50" rx="2" fill="rgba(255,255,255,0.14)" />

                {/* ── Bottle body — tall rectangle with soft corners like photo ── */}
                <rect x="30" y="98" width="140" height="290" rx="8" fill="url(#bBody)" />
                {/* liquid glow overlay */}
                <rect x="30" y="98" width="140" height="290" rx="8" fill="url(#bLiquid)" />

                {/* left edge highlight */}
                <rect x="30" y="100" width="12" height="284" rx="6" fill="url(#bHighlight)" />
                {/* right edge subtle */}
                <rect x="158" y="100" width="8" height="284" rx="4" fill="rgba(255,255,255,0.08)" />

                {/* ── Water-drop reflection line ── */}
                <path d="M50 130 Q44 200 46 280" stroke="rgba(255,255,255,0.22)" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M62 115 Q58 160 60 200" stroke="rgba(255,255,255,0.10)" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* ── Label area ── */}
                <rect x="50" y="165" width="100" height="130" rx="3" fill="rgba(6,20,32,0.30)" />

                {/* HUMN brand mark */}
                <text x="100" y="194" textAnchor="middle"
                  fontFamily="Josefin Sans, sans-serif"
                  fontSize="8" fontWeight="400" letterSpacing="5"
                  fill="rgba(232,247,255,0.95)">HUMN.</text>

                {/* Divider */}
                <line x1="60" y1="202" x2="140" y2="202" stroke="rgba(232,247,255,0.35)" strokeWidth="0.6" />

                {/* Fragrance name */}
                <text x="100" y="230" textAnchor="middle"
                  fontFamily="Cormorant Garamond, serif"
                  fontSize="18" fontWeight="400" letterSpacing="2"
                  fill="rgba(232,247,255,0.95)">AFTER</text>
                <text x="100" y="252" textAnchor="middle"
                  fontFamily="Cormorant Garamond, serif"
                  fontSize="18" fontWeight="400" letterSpacing="2"
                  fill="rgba(232,247,255,0.95)">HOURS</text>

                {/* Sub-tagline */}
                <text x="100" y="268" textAnchor="middle"
                  fontFamily="Josefin Sans, sans-serif"
                  fontSize="4.5" letterSpacing="3"
                  fill="rgba(172,218,240,0.70)">SCENT FOR THE SELF</text>

                {/* Volume */}
                <text x="100" y="284" textAnchor="middle"
                  fontFamily="Josefin Sans, sans-serif"
                  fontSize="4" letterSpacing="2"
                  fill="rgba(172,218,240,0.55)">50ML</text>

                {/* ── Bottom edge ── */}
                <rect x="30" y="380" width="140" height="8" rx="4" fill="url(#bBottom)" opacity="0.6" />

                {/* ── Floor reflection ── */}
                <rect x="40" y="390" width="120" height="24" rx="4" fill="url(#bBody)" opacity="0.18" />
              </svg>
            </motion.div>

            <div className="hero__bottle-shadow" />
          </div>

          {/* floating label */}
          <motion.div
            className="hero__floating-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <span className="hero__floating-tag-label">New Arrival</span>
            <span className="hero__floating-tag-name">HUMN After Hours</span>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
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