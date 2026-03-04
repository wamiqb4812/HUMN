import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Craft.css";

const ingredients = [
  { name: "Oud al Shams", origin: "Arabia", note: "Top", description: "Aged 12 years in cedar barrels, this rare resin carries centuries of ritual smoke." },
  { name: "Bulgarian Rose", origin: "Valley of Roses", note: "Heart", description: "Harvested by hand at dawn, when petals hold the last traces of night dew." },
  { name: "Ambergris", origin: "Open Sea", note: "Base", description: "Gifted by ocean currents over years, it anchors every fragrance with warmth and depth." },
  { name: "Iris Pallida", origin: "Tuscany", note: "Heart", description: "Three years in the ground before the rhizome yields its violet-powdery soul." },
  { name: "Oud al Shams", origin: "Sri Lanka", note: "Base", description: "Soft, creamy sandalwood that cradles all other notes in quiet, enduring warmth." },
  { name: "Neroli Bigarade", origin: "Sicily", note: "Top", description: "The bittersweet bloom of Seville orange — luminous, fleeting, impossible to ignore." },
];

export default function Craft() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="craft" className="craft" ref={ref}>
      <div className="craft__ambient" />

      <div className="craft__container">
        <motion.div
          className="craft__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="craft__eyebrow">
            <span className="gold-line" />
            <span>The Craft</span>
            <span className="gold-line" />
          </div>
          <h2 className="craft__title">Inside Every Drop</h2>
          <p className="craft__subtitle">
            We travel the world to source ingredients that cannot be rushed,<br />
            replicated, or hurried. Only the rarest make it into HUMN.
          </p>
        </motion.div>

        <div className="craft__pyramid">
          <div className="craft__pyramid-label craft__pyramid-label--top">
            <span>Top Notes</span>
            <span className="craft__pyramid-hint">First 15 minutes</span>
          </div>
          <div className="craft__pyramid-bar craft__pyramid-bar--top" />
          <div className="craft__pyramid-label craft__pyramid-label--heart">
            <span>Heart Notes</span>
            <span className="craft__pyramid-hint">15 min – 4 hours</span>
          </div>
          <div className="craft__pyramid-bar craft__pyramid-bar--heart" />
          <div className="craft__pyramid-label craft__pyramid-label--base">
            <span>Base Notes</span>
            <span className="craft__pyramid-hint">4+ hours</span>
          </div>
          <div className="craft__pyramid-bar craft__pyramid-bar--base" />
        </div>

        <div className="craft__grid">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              className="craft__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
            >
              <div className="craft__card-header">
                <span className={`craft__note-badge craft__note-badge--${item.note.toLowerCase()}`}>{item.note}</span>
                <span className="craft__origin">{item.origin}</span>
              </div>
              <h3 className="craft__ingredient-name">{item.name}</h3>
              <p className="craft__ingredient-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="craft__philosophy"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <span className="craft__quote-mark">"</span>
          <p className="craft__quote">
            A fragrance should not announce itself. It should be discovered — like a memory surfacing at unexpected hours.
          </p>
          <span className="craft__quote-author">— Isabelle Moreau, Head Perfumer</span>
        </motion.div>
      </div>
    </section>
  );
}
