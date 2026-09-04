import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";

const games = [
  {
    name: "Free Fire",
    category: "Battle Royale",
    slug: "free-fire",
    accent: "orange",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "PUBG Mobile",
    category: "Battle Royale",
    slug: "pubg-mobile",
    accent: "cyan",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mobile Legends",
    category: "MOBA",
    slug: "mobile-legends",
    accent: "purple",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Call of Duty",
    category: "FPS",
    slug: "call-of-duty",
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Your game credits are delivered quickly with our optimized top-up system.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description:
      "Your information and transactions are protected with secure technology.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Need help? Our support system is ready whenever you need us.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Game",
    description:
      "Select the game you want to recharge from our supported games.",
  },
  {
    number: "02",
    title: "Enter Player ID",
    description:
      "Enter your player ID and select the package you want to purchase.",
  },
  {
    number: "03",
    title: "Get Your Top-Up",
    description:
      "Complete payment and receive your game credits quickly.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}
      <main>
        <section className="hero-section">
          <div className="hero-grid" />

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <Sparkles size={15} />
                <span>Bangladesh's Gaming Top-Up Platform</span>
              </motion.div>

              <h1>
                Power Up Your
                <span> Gaming Experience.</span>
              </h1>

              <p className="hero-description">
                Fast, secure and reliable game top-ups for your favorite
                games. Choose your game, select a package and power up in
                seconds.
              </p>

              <div className="hero-actions">
                <Link to="/topup/free-fire" className="btn btn-primary">
                  Start Top-Up
                  <ArrowRight size={18} />
                </Link>

                <a href="#how-it-works" className="btn btn-secondary">
                  How It Works
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <CheckCircle2 size={17} />
                  <span>Instant Delivery</span>
                </div>

                <div className="trust-item">
                  <CheckCircle2 size={17} />
                  <span>Secure Payment</span>
                </div>

                <div className="trust-item">
                  <CheckCircle2 size={17} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-card-main">
                <div className="hero-card-glow" />

                <div className="hero-card-top">
                  <div>
                    <span className="mini-label">QUICK TOP-UP</span>
                    <h3>Choose Your Game</h3>
                  </div>

                  <div className="hero-status">
                    <span />
                    Online
                  </div>
                </div>

                <div className="hero-mini-games">
                  {games.map((game, index) => (
                    <motion.div
                      key={game.slug}
                      className={`hero-mini-game hero-mini-${index + 1}`}
                      whileHover={{ y: -5, scale: 1.03 }}
                    >
                      <img src={game.image} alt={game.name} />
                      <div className="mini-game-overlay" />
                      <span>{game.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="hero-card-bottom">
                  <div className="hero-bottom-icon">
                    <Zap size={18} />
                  </div>

                  <div>
                    <strong>Instant Top-Up</strong>
                    <small>Fast & secure delivery</small>
                  </div>

                  <ArrowUpRight size={19} />
                </div>
              </div>

              <motion.div
                className="floating-card floating-card-one"
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="floating-icon">
                  <Zap size={17} />
                </div>
                <div>
                  <strong>Fast Delivery</strong>
                  <small>Usually within seconds</small>
                </div>
              </motion.div>

              <motion.div
                className="floating-card floating-card-two"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="floating-icon secure">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <strong>Secure</strong>
                  <small>Protected payment</small>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================
            QUICK SEARCH
        ========================== */}
        <section className="quick-search-section">
          <div className="container">
            <motion.div
              className="quick-search-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="quick-search-text">
                <span>QUICK SEARCH</span>
                <h3>Find your game</h3>
              </div>

              <div className="quick-search-input">
                <Search size={19} />
                <input
                  type="text"
                  placeholder="Search games..."
                  aria-label="Search games"
                />
              </div>

              <Link to="/topup/free-fire" className="quick-search-button">
                Browse Games
                <ChevronRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =========================
            POPULAR GAMES
        ========================== */}
        <section className="section games-section" id="games">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="section-kicker">POPULAR GAMES</span>
                <h2>Top up your favorite games</h2>
                <p>
                  Choose a game and get your credits delivered quickly.
                </p>
              </div>

              <Link to="/topup/free-fire" className="view-all-link">
                View All
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <div className="games-grid">
              {games.map((game, index) => (
                <motion.div
                  key={game.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <GameCard
                    name={game.name}
                    category={game.category}
                    image={game.image}
                    accent={game.accent}
                    slug={game.slug}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            FEATURES
        ========================== */}
        <section className="section features-section">
          <div className="container">
            <motion.div
              className="section-heading centered"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-kicker">WHY NOSU TOPUP</span>
              <h2>Built for gamers</h2>
              <p>
                Everything you need for a simple, fast and reliable top-up
                experience.
              </p>
            </motion.div>

            <div className="features-grid">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    className="feature-card glass-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="feature-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================
            HOW IT WORKS
        ========================== */}
        <section
          className="section how-section"
          id="how-it-works"
        >
          <div className="container">
            <motion.div
              className="section-heading centered"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-kicker">HOW IT WORKS</span>

              <h2>Top-up in 3 simple steps</h2>

              <p>
                No complicated process. Just choose, enter and recharge.
              </p>
            </motion.div>

            <div className="steps-wrapper">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="step-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="step-number">{step.number}</div>

                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="step-line" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            STATS
        ========================== */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-icon">
                  <Zap size={20} />
                </div>

                <div>
                  <strong>Fast</strong>
                  <span>Delivery</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-item">
                <div className="stat-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Secure</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-item">
                <div className="stat-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Available</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-item">
                <div className="stat-icon">
                  <Headphones size={20} />
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CTA
        ========================== */}
        <section className="cta-section" id="support">
          <div className="cta-glow" />

          <div className="container">
            <motion.div
              className="cta-card"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="cta-content">
                <span className="section-kicker">READY TO PLAY?</span>

                <h2>
                  Power up your game.
                  <br />
                  <span>Start now.</span>
                </h2>

                <p>
                  Select your favorite game and get your top-up delivered
                  quickly and securely.
                </p>

                <Link
                  to="/topup/free-fire"
                  className="btn btn-primary"
                >
                  Start Top-Up
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="cta-decoration">
                <div className="cta-circle circle-one" />
                <div className="cta-circle circle-two" />
                <div className="cta-circle circle-three" />

                <div className="cta-bolt">
                  <Zap size={54} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="brand">
                <span className="brand-mark">N</span>

                <span>
                  <strong>NOSU</strong>
                  <small>TOPUP</small>
                </span>
              </Link>

              <p>
                Fast, secure and reliable game top-up platform built for
                gamers in Bangladesh.
              </p>

              <div className="footer-status">
                <span />
                All systems operational
              </div>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>

              <Link to="/">Home</Link>
              <a href="#games">Games</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#support">Support</a>
            </div>

            <div className="footer-column">
              <h4>Account</h4>

              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>

            <div className="footer-column">
              <h4>Popular</h4>

              <Link to="/topup/free-fire">Free Fire</Link>
              <Link to="/topup/pubg-mobile">PUBG Mobile</Link>
              <Link to="/topup/mobile-legends">
                Mobile Legends
              </Link>
              <Link to="/topup/call-of-duty">
                Call of Duty
              </Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} NOSU TOPUP. All rights
              reserved.
            </span>

            <div className="footer-bottom-links">
              <span>Secure Payments</span>
              <span>•</span>
              <span>Instant Delivery</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
