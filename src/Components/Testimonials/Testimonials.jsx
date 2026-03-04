import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Testimonials.css";

const reviews = [
  {
    text: "HUMN Noir changed how I think about scent. It isn't something I wear — it's something I become. Three months later and I still receive compliments daily.",
    author: "Camille Rousseau",
    location: "Paris, France",
    stars: 5,
  },
  {
    text: "HUMN Essence is the first fragrance that made me stop in my own tracks. There's something deeply personal in it, like it was made specifically for the version of myself I've been trying to become.",
    author: "Amara Osei",
    location: "Accra, Ghana",
    stars: 5,
  },
  {
    text: "I have a collection of 40+ fragrances. HUMN Bloom has displaced every single one as my daily. It's light but it has gravity. I don't know how they did it.",
    author: "Daniel Park",
    location: "Seoul, Korea",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonials__stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="testimonials__star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="testimonials" ref={ref}>
      <div className="testimonials__container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonials__eyebrow">
            <span className="gold-line" />
            <span>Voices</span>
            <span className="gold-line" />
          </div>
          <h2 className="testimonials__title">What HUMN Wearers Say</h2>
        </motion.div>

        <motion.div
          className="testimonials__slider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="testimonials__card-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testimonials__card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <span className="testimonials__open-quote">"</span>
                <Stars count={reviews[active].stars} />
                <p className="testimonials__text">{reviews[active].text}</p>
                <div className="testimonials__author">
                  <span className="testimonials__author-name">{reviews[active].author}</span>
                  <span className="testimonials__author-location">{reviews[active].location}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials__dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? "testimonials__dot--active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
