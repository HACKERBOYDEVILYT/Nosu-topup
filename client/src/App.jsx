import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="live-dot" />
                Bangladesh's Gaming Top-Up Platform
              </div>

              <h1>
                Power Up Your
                <span> Gaming Journey.</span>
              </h1>

              <p>
                Fast, secure and reliable game top-up
                service. Get your favorite game credits
                delivered instantly.
              </p>

              <div className="hero-actions">
                <a
                  href="#games"
                  className="btn btn-primary"
                >
                  <ShoppingBag size={18} />
                  Start Top Up
                </a>

                <a
                  href="#games"
                  className="btn btn-secondary"
                >
                  Explore Games
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <strong>10K+</strong>
                  <span>Happy Users</span>
                </div>

                <div className="trust-item">
                  <strong>50K+</strong>
                  <span>Orders Done</span>
                </div>

                <div className="trust-item">
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-glow" />

              <div className="hero-card hero-card-main">
                <div className="hero-card-top">
                  <span>FAST TOP-UP</span>
                  <span className="online">
                    ● Online
                  </span>
                </div>

                <div className="hero-controller">
                  🎮
                </div>

                <h3>Level Up Faster</h3>

                <p>
                  Your game. Your way. Instant delivery.
                </p>

                <div className="hero-progress">
                  <span />
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <span className="floating-icon">⚡</span>
                <div>
                  <strong>Instant</strong>
                  <small>Delivery</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span className="floating-icon">✓</span>
                <div>
                  <strong>Secure</strong>
                  <small>Payment</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="games"
          className="section games-section"
        >
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">
                  TOP GAMES
                </span>

                <h2 className="section-title">
                  Choose Your Game
                </h2>

                <p className="section-subtitle">
                  Select a game and start your top-up.
                </p>
              </div>

              <a
                href="/games"
                className="view-all"
              >
                View All →
              </a>
            </div>

            <div className="games-grid">
              <GameCard
                icon="🔥"
                name="Free Fire"
                type="Diamonds"
              />

              <GameCard
                icon="⚔️"
                name="PUBG Mobile"
                type="UC"
              />

              <GameCard
                icon="⭐"
                name="Mobile Legends"
                type="Diamonds"
              />

              <GameCard
                icon="🎯"
                name="Call of Duty"
                type="CP"
              />

              <GameCard
                icon="👑"
                name="Valorant"
                type="VP"
              />

              <GameCard
                icon="🚀"
                name="Clash of Clans"
                type="Gems"
              />
            </div>
          </div>
        </section>

        <section className="section features-section">
          <div className="container">
            <div className="feature-grid">
              <Feature
                icon="⚡"
                title="Instant Delivery"
                text="Your order is processed quickly after successful payment."
              />

              <Feature
                icon="🔒"
                title="100% Secure"
                text="Your information and transactions stay protected."
              />

              <Feature
                icon="💳"
                title="Easy Payment"
                text="Convenient local payment methods for Bangladesh."
              />

              <Feature
                icon="🎧"
                title="24/7 Support"
                text="Our support team is ready whenever you need help."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-brand">
              NOSU <span>TOPUP</span>
            </div>

            <p>
              Fast & reliable gaming top-up platform.
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

function GameCard({ icon, name, type }) {
  return (
    <a href={`/games/${name.toLowerCase().replaceAll(" ", "-")}`}>
      <article className="game-card">
        <div className="game-card-icon">
          {icon}
        </div>

        <div className="game-card-info">
          <h3>{name}</h3>
          <p>{type} Top-Up</p>
        </div>

        <span className="game-arrow">→</span>
      </article>
    </a>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card glass-card">
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <>
      <Navbar />

      <div className="placeholder-page">
        <h1>{title}</h1>
        <p>This page will be built in the next step.</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/games"
        element={<Placeholder title="Games" />}
      />

      <Route
        path="/orders"
        element={<Placeholder title="Orders" />}
      />

      <Route
        path="/login"
        element={<Placeholder title="Login" />}
      />

      <Route
        path="/register"
        element={<Placeholder title="Register" />}
      />

      <Route
        path="*"
        element={<Placeholder title="404 — Page Not Found" />}
      />
    </Routes>
  );
}
