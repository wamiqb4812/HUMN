import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import afterHoursImg from "../../assets/p1.jpeg";
import limeLightImg  from "../../assets/p2.jpeg";
import justSkinImg   from "../../assets/p3.jpeg";
import "./Collection.css";

const perfumes = [
  {
    id: 1,
    name: "After Hours",
    descriptor: "Dark · Aquatic · Electric",
    description:
      "A nocturnal plunge into deep blue waters — ocean mist, black amber, and cool vetiver. For those who own the night.",
    price: "$185",
    badge: "Bestseller",
    image: afterHoursImg,
    notes: ["Ocean Mist", "Black Amber", "Vetiver"],
    theme: "blue",
  },
  {
    id: 2,
    name: "Lime Light",
    descriptor: "Fresh · Citrus · Luminous",
    description:
      "A burst of sun-drenched lime, white jasmine, and green cedar. Effortless energy in a bottle — bright, clean, alive.",
    price: "$155",
    badge: "New",
    image: limeLightImg,
    notes: ["Lime", "Jasmine", "Green Cedar"],
    theme: "lime",
  },
  {
    id: 3,
    name: "Just Skin",
    descriptor: "Clean · Musky · Intimate",
    description:
      "The scent of warm skin — white musk, soft iris, and sandalwood. Invisible yet unforgettable. Pure you.",
    price: "$165",
    badge: null,
    image: justSkinImg,
    notes: ["White Musk", "Iris", "Sandalwood"],
    theme: "silver",
  },
];

export default function Collection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [addedIds, setAddedIds] = useState([]);

  const addToCart = (id) => {
    setAddedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
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
              className={`collection__card collection__card--${p.theme}`}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {p.badge && (
                <span className="collection__badge">{p.badge}</span>
              )}

              <div className="collection__image-area">
                <div className={`collection__img-glow collection__img-glow--${p.theme}`} />
                <motion.img
                  src={p.image}
                  alt={`HUMN ${p.name}`}
                  className="collection__product-img"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="collection__card-body">
                <span className="collection__descriptor">{p.descriptor}</span>
                <h3 className="collection__name">HUMN {p.name}</h3>
                <p className="collection__desc">{p.description}</p>

                <div className="collection__notes">
                  {p.notes.map((n) => (
                    <span key={n} className="collection__note">{n}</span>
                  ))}
                </div>

                <div className="collection__card-footer">
                  <span className="collection__price">{p.price}</span>
                  <motion.button
                    className={`collection__add-btn ${
                      addedIds.includes(p.id) ? "collection__add-btn--added" : ""
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => addToCart(p.id)}
                  >
                    {addedIds.includes(p.id) ? "Added ✓" : "Add to Cart"}
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