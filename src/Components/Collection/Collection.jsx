import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Collection.css";

const perfumes = [
  {
    id: 1,
    name: "HUMN Noir",
    descriptor: "Dark · Woody · Resinous",
    description: "A nocturnal reverie of black oud, vetiver, and smoked amber. For those who wear the night like a second skin.",
    price: "$185",
    badge: "Bestseller",
    color: "#1a1510",
    accent: "#c9a96e",
    notes: ["Black Oud", "Vetiver", "Smoked Amber"],
  },
  {
    id: 2,
    name: "HUMN Essence",
    descriptor: "Floral · Musky · Warm",
    description: "The memory of skin — soft iris, white musk, and sandalwood. An intimate trail that lingers like a whispered secret.",
    price: "$165",
    badge: "New",
    color: "#1e1814",
    accent: "#d6c5ae",
    notes: ["Iris", "White Musk", "Sandalwood"],
  },
  {
    id: 3,
    name: "HUMN Bloom",
    descriptor: "Fresh · Green · Luminous",
    description: "Morning light through petals — neroli, dewy violet leaf, and cedar. Pure, effortless, and eternal.",
    price: "$155",
    badge: null,
    color: "#141818",
    accent: "#a0b8a0",
    notes: ["Neroli", "Violet Leaf", "Cedar"],
  },
];

function PerfumeBottleMini({ color, accent, name }) {
  return (
    <svg viewBox="0 0 120 240" className="collection__bottle-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bg-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={`${color}cc`} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        <linearGradient id={`cap-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} />
          <stop offset="50%" stopColor={`${accent}dd`} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
      </defs>
      <rect x="48" y="12" width="24" height="6" rx="2" fill={`url(#cap-${name})`} />
      <rect x="44" y="16" width="32" height="14" rx="4" fill={`url(#cap-${name})`} />
      <rect x="50" y="28" width="20" height="36" rx="2" fill={`url(#bg-${name})`} />
      <path d="M28 68 Q18 90 18 130 Q18 195 60 205 Q102 195 102 130 Q102 90 92 68 Z" fill={`url(#bg-${name})`} />
      <path d="M34 82 Q28 110 30 148" stroke="rgba(255,255,255,0.12)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="36" y="105" width="48" height="56" rx="2" fill="rgba(0,0,0,0.2)" />
      <text x="60" y="124" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="7" fontWeight="300" letterSpacing="4" fill="rgba(240,235,227,0.9)">HUMN</text>
      <line x1="42" y1="130" x2="78" y2="130" stroke={`${accent}88`} strokeWidth="0.5" />
      <text x="60" y="143" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" fontSize="4" letterSpacing="3" fill={`${accent}cc`}>{name.split(" ")[1]?.toUpperCase()}</text>
      <ellipse cx="60" cy="203" rx="42" ry="6" fill={`${color}88`} />
    </svg>
  );
}

export default function Collection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [cart, setCart] = useState([]);

  const addToCart = (name) => {
    setCart((prev) => [...prev, name]);
  };

  return (
    <section id="collection" className="collection" ref={ref}>
      <div className="collection__container">
        <motion.div
          className="collection__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="collection__eyebrow">
            <span className="gold-line" />
            <span>The Collection</span>
            <span className="gold-line" />
          </div>
          <h2 className="collection__title">A Signature for Every Soul</h2>
          <p className="collection__subtitle">
            Each fragrance is a world. Find where you belong.
          </p>
        </motion.div>

        <div className="collection__grid">
          {perfumes.map((p, i) => (
            <motion.div
              key={p.id}
              className="collection__card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {p.badge && <span className="collection__badge">{p.badge}</span>}

              <div className="collection__image-area" style={{ background: p.color }}>
                <div className="collection__card-glow" style={{ background: `radial-gradient(ellipse at 50% 80%, ${p.accent}22 0%, transparent 70%)` }} />
                <PerfumeBottleMini color={p.color} accent={p.accent} name={p.name} />
              </div>

              <div className="collection__card-body">
                <span className="collection__descriptor">{p.descriptor}</span>
                <h3 className="collection__name">{p.name}</h3>
                <p className="collection__desc">{p.description}</p>

                <div className="collection__notes">
                  {p.notes.map((n) => (
                    <span key={n} className="collection__note">{n}</span>
                  ))}
                </div>

                <div className="collection__card-footer">
                  <span className="collection__price">{p.price}</span>
                  <motion.button
                    className="collection__add-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => addToCart(p.name)}
                    style={{ borderColor: `${p.accent}44` }}
                  >
                    {cart.includes(p.name) ? "Added ✓" : "Add to Cart"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
