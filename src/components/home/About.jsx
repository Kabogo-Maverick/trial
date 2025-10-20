import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            About <span>Nektar Ratish</span>
          </h2>
          <p>
            Nektar Ratish is more than a brand — it’s a celebration of creativity, 
            culture, and connection. We craft modern digital experiences that 
            awaken curiosity, inspire innovation, and redefine simplicity.
          </p>
          <p>
            Through artistry and technology, we bring stories to life — 
            where design meets soul and innovation meets elegance.
          </p>

          <div className="about-buttons">
            <button className="btn-primary">Our Story</button>
            <button className="btn-outline">Explore More</button>
          </div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Nektar Ratish Experience"
          />
        </motion.div>
      </div>
    </section>
  );
}
