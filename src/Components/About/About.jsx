import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__image-col"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="about__image-frame">
            <div className="about__image-inner">
              <svg viewBox="0 0 320 480" xmlns="http://www.w3.org/2000/svg" className="about__scene-svg">
                <defs>
                  <linearGradient id="tableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2a2218" />
                    <stop offset="100%" stopColor="#1a1510" />
                  </linearGradient>
                  <linearGradient id="bgScene" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f0e0c" />
                    <stop offset="100%" stopColor="#1c1a16" />
                  </linearGradient>
                </defs>
                <rect width="320" height="480" fill="url(#bgScene)" />
                {/* Soft bg glow */}
                <ellipse cx="160" cy="200" rx="140" ry="120" fill="rgba(201,169,110,0.04)" />
                {/* Table */}
                <rect x="0" y="360" width="320" height="120" fill="url(#tableGrad)" />
                <line x1="0" y1="360" x2="320" y2="360" stroke="rgba(201,169,110,0.2)" strokeWidth="1" />
                {/* Large bottle */}
                <rect x="130" y="100" width="28" height="8" rx="2" fill="#c9a96e" />
                <rect x="124" y="106" width="40" height="20" rx="5" fill="#c9a96e" />
                <rect x="130" y="123" width="28" height="50" rx="2" fill="#2a2218" />
                <path d="M95 176 Q80 210 80 270 Q80 345 160 365 Q240 345 240 270 Q240 210 225 176 Z" fill="#1e1b15" stroke="rgba(201,169,110,0.15)" strokeWidth="1" />
                <path d="M105 196 Q96 230 98 290" stroke="rgba(255,255,255,0.1)" strokeWidth="5" fill="none" strokeLinecap="round" />
                <rect x="108" y="240" width="104" height="76" rx="3" fill="rgba(0,0,0,0.25)" />
                <text x="160" y="267" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fontWeight="300" letterSpacing="7" fill="rgba(240,235,227,0.9)">HUMN</text>
                <line x1="116" y1="275" x2="204" y2="275" stroke="rgba(201,169,110,0.4)" strokeWidth="0.5" />
                <text x="160" y="293" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" fontSize="6" letterSpacing="5" fill="rgba(201,169,110,0.6)">ESSENCE · EDP</text>
                {/* Small bottle */}
                <rect x="228" y="290" width="14" height="4" rx="1" fill="#c9a96e" />
                <rect x="224" y="293" width="22" height="10" rx="3" fill="#c9a96e" />
                <rect x="228" y="301" width="14" height="22" rx="1" fill="#2a2218" />
                <path d="M214 324 Q208 336 208 352 Q208 368 235 372 Q262 368 262 352 Q262 336 256 324 Z" fill="#1e1b15" />
                {/* Petals */}
                <ellipse cx="80" cy="368" rx="18" ry="6" fill="rgba(168,152,128,0.3)" transform="rotate(-20 80 368)" />
                <ellipse cx="90" cy="364" rx="15" ry="5" fill="rgba(168,152,128,0.2)" transform="rotate(10 90 364)" />
                <ellipse cx="265" cy="366" rx="12" ry="4" fill="rgba(168,152,128,0.2)" transform="rotate(-15 265 366)" />
                {/* Candle */}
                <rect x="40" y="318" width="20" height="50" rx="2" fill="#e8e0d0" />
                <rect x="40" y="364" width="20" height="4" fill="#d4c8b4" />
                <line x1="50" y1="318" x2="50" y2="310" stroke="#8a7a60" strokeWidth="1.5" />
                <ellipse cx="50" cy="308" rx="3" ry="5" fill="#ffb347" opacity="0.8" />
                <ellipse cx="50" cy="308" rx="1.5" ry="3" fill="#fff" opacity="0.6" />
              </svg>
            </div>
            <div className="about__image-border" />
          </div>
          <div className="about__image-tag">
            <span className="about__image-tag-year">Est. 2019</span>
            <span className="about__image-tag-place">Paris · New York · Dubai</span>
          </div>
        </motion.div>

        <div className="about__text-col">
          <motion.div
            className="about__eyebrow"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gold-line" />
            <span>Our Story</span>
          </motion.div>

          <motion.h2
            className="about__title"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.35 }}
          >
            Crafted with<br /><em>Emotion</em>
          </motion.h2>

          <motion.div
            className="about__body"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.5 }}
          >
            <p>
              HUMN was born from a simple belief: that fragrance is not merely decoration, but memory. It is the invisible thread between who we are and who we long to become.
            </p>
            <p>
              Founded in the quiet workshops of Grasse, our perfumers spend months — sometimes years — distilling single emotions into scent. No shortcuts. No synthetic approximations. Only raw truth.
            </p>
            <p>
              Every bottle is a collaboration between the earth and the human spirit, between ancient ritual and modern longing.
            </p>
          </motion.div>

          <motion.div
            className="about__values"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              ["Rare Botanicals", "Sourced from 6 continents"],
              ["Hand-Crafted", "Small batch production"],
              ["Cruelty Free", "Always & forever"],
            ].map(([title, sub]) => (
              <div key={title} className="about__value">
                <span className="about__value-dot" />
                <div>
                  <p className="about__value-title">{title}</p>
                  <p className="about__value-sub">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
