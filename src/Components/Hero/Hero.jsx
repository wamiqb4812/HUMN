import { motion } from "framer-motion";
import bottleImg from "../../assets/p1.jpeg";
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
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
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
            {[
              ["12+", "Signatures"],
              ["94%", "Pure Ingredients"],
              ["∞", "Memories"],
            ].map(([num, label]) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-num">{num}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <div className="hero__image-wrapper">
            <motion.div
              className="hero__bottle-glow"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="hero__bottle"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero__product-img-crop">
                <img
                  src={bottleImg}
                  alt="HUMN After Hours Fragrance"
                  className="hero__product-img"
                />
              </div>
            </motion.div>
            <div className="hero__bottle-shadow" />
          </div>

          <motion.div
            className="hero__floating-tag"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <span className="hero__floating-tag-label">Signature Scent</span>
            <span className="hero__floating-tag-name">After Hours</span>
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