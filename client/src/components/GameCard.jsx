import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function GameCard({
  name,
  category,
  image,
  accent = "orange",
}) {
  return (
    <motion.a
      href="#"
      className={`game-card ${accent}`}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.2 }}
    >
      <div className="game-image">
        <img src={image} alt={name} />

        <div className="game-overlay" />

        <span className="game-category">
          {category}
        </span>

        <div className="game-arrow">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="game-info">
        <h3>{name}</h3>
        <span>Instant Top-Up</span>
      </div>
    </motion.a>
  );
}
