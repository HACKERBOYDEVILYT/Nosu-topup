import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Headphones,
  Search,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";

const games = [
  {
    name: "Free Fire",
    category: "Battle Royale",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "PUBG Mobile",
    category: "Battle Royale",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85",
    accent: "cyan",
  },
  {
    name: "Mobile Legends",
    category: "MOBA",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Call of Duty",
    category: "FPS",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=85",
    accent: "cyan",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    text: "Your game credits are delivered within seconds.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    text: "Safe payments and protected order processing.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Our support team is always ready to help.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow">
                <Sparkles size={15} />
                Bangladesh's Gaming Top-Up Platform
              </div>

              <h1>
                Power Up Your
                <span> Gaming Experience.</span>
              </h1>

              <p>
                Fast, secure and reliable game top-up.
                Choose your game, select a package and
                get your credits instantly.
              </p>

              <div className="hero-buttons">
                <a href="#games" className="btn btn-primary">
                  Start Top-Up
                  <ArrowRight size={18} />
                </a>

                <a href="#how-it-works" className="btn btn-secondary">
                  How It Works
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-avatars">
                  <span>U</span>
                  <span>G</span>
                  <span>+</span>
                </div>

                <div>
                  <strong>Trusted by gamers</strong>
                  <small>Fast • Safe • Reliable</small>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-card">
                <div className="hero-card-top">
                  <span>TOP-UP CENTER</span>
                  <span className="live-dot">
                    ● LIVE
                  </span>
                </div>

                <div className="hero-controller">
                  <div className="controller-circle">
                    N
                  </div>

                  <div>
                    <small>WELCOME TO</small>
                    <h2>NOSU TOPUP</h2>
                  </div>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>10K+</strong>
                    <span>Orders</span>
                  </div>

                  <div>
                    <strong>50+</strong>
                    <span>Products</span>
                  </div>

                  <div>
                    <strong>24/7</strong>
                    <span>Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUICK SEARCH */}
        <section className="quick-search-section">
          <div className="container">
            <div className="quick-search">
              <div className="search-icon">
                <Search size={20} />
              </div>

              <input
                type="text"
                placeholder="Search your favorite game..."
              />

              <button className="search-submit">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* GAMES */}
        <section className="section games-section" id="games">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-kicker">
                  DISCOVER
                </span>

                <h2 className="section-title">
                  Popular Games
                </h2>

                <p className="section-subtitle">
                  Top up your favorite games instantly.
                </p>
              </div>

              <a href="#" className="view-all">
                View All <ArrowRight size={17} />
              </a>
            </div>

            <div className="games-grid">
              {games.map((game) => (
                <GameCard
                  key={game.name}
                  {...game}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section features-section">
          <div className="container">
            <div className="feature-grid">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="feature-card glass-card"
                    key={item.title}
                    whileHover={{ y: -5 }}
                  >
                    <div className="feature-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          className="section how-section"
          id="how-it-works"
        >
          <div className="container">
            <div className="section-header centered">
              <div>
                <span className="section-kicker">
                  SIMPLE PROCESS
                </span>

                <h2 className="section-title">
                  Top-Up in 3 Easy Steps
                </h2>

                <p className="section-subtitle">
                  No complicated process. Just choose,
                  pay and play.
                </p>
              </div>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <span>01</span>
                <h3>Select Game</h3>
                <p>
                  Choose the game you want to top up.
                </p>
              </div>

              <div className="step-card">
                <span>02</span>
                <h3>Enter Player ID</h3>
                <p>
                  Enter your correct player information.
                </p>
              </div>

              <div className="step-card">
                <span>03</span>
                <h3>Get Top-Up</h3>
                <p>
                  Complete payment and receive your credits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="support">
          <div className="container">
            <div className="cta-card">
              <div>
                <span className="section-kicker">
                  READY TO PLAY?
                </span>

                <h2>
                  Your next level
                  <br />
                  starts here.
                </h2>
              </div>

              <a href="#games" className="btn btn-primary">
                Explore Games
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark">N</span>
              <span>
                <strong>NOSU</strong>
                <small>TOPUP</small>
              </span>
            </div>

            <p>
              Fast, secure and reliable gaming top-up
              platform.
            </p>
          </div>

          <div className="footer-copy">
            © 2026 NOSU TOPUP. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
