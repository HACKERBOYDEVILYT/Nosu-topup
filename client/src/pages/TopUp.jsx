import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  UserRound,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const gameData = {
  "free-fire": {
    name: "Free Fire",
    category: "Battle Royale",
    short: "FF",
    color: "orange",
    packages: [
      { id: 1, title: "100 Diamonds", price: 85, bonus: "" },
      { id: 2, title: "310 Diamonds", price: 250, bonus: "10 Bonus" },
      { id: 3, title: "520 Diamonds", price: 405, bonus: "20 Bonus" },
      { id: 4, title: "1060 Diamonds", price: 810, bonus: "60 Bonus" },
      { id: 5, title: "2180 Diamonds", price: 1590, bonus: "120 Bonus" },
      { id: 6, title: "Weekly Membership", price: 155, bonus: "Best Value" },
    ],
  },

  "pubg-mobile": {
    name: "PUBG Mobile",
    category: "Battle Royale",
    short: "PUBG",
    color: "cyan",
    packages: [
      { id: 1, title: "60 UC", price: 115, bonus: "" },
      { id: 2, title: "325 UC", price: 510, bonus: "25 Bonus" },
      { id: 3, title: "660 UC", price: 990, bonus: "60 Bonus" },
      { id: 4, title: "1800 UC", price: 2500, bonus: "180 Bonus" },
      { id: 5, title: "3850 UC", price: 4950, bonus: "450 Bonus" },
      { id: 6, title: "8100 UC", price: 9800, bonus: "1000 Bonus" },
    ],
  },

  "mobile-legends": {
    name: "Mobile Legends",
    category: "MOBA",
    short: "ML",
    color: "cyan",
    packages: [
      { id: 1, title: "86 Diamonds", price: 120, bonus: "" },
      { id: 2, title: "172 Diamonds", price: 235, bonus: "" },
      { id: 3, title: "257 Diamonds", price: 345, bonus: "Bonus" },
      { id: 4, title: "706 Diamonds", price: 890, bonus: "Bonus" },
      { id: 5, title: "1412 Diamonds", price: 1750, bonus: "Bonus" },
      { id: 6, title: "Twilight Pass", price: 980, bonus: "Best Value" },
    ],
  },

  "call-of-duty": {
    name: "Call of Duty Mobile",
    category: "FPS",
    short: "COD",
    color: "orange",
    packages: [
      { id: 1, title: "80 CP", price: 110, bonus: "" },
      { id: 2, title: "420 CP", price: 520, bonus: "" },
      { id: 3, title: "880 CP", price: 990, bonus: "Bonus" },
      { id: 4, title: "2400 CP", price: 2450, bonus: "Bonus" },
      { id: 5, title: "5000 CP", price: 4900, bonus: "Bonus" },
      { id: 6, title: "10800 CP", price: 9900, bonus: "Best Value" },
    ],
  },
};

function getGame(slug) {
  return (
    gameData[slug] || {
      name: "Free Fire",
      category: "Battle Royale",
      short: "FF",
      color: "orange",
      packages: gameData["free-fire"].packages,
    }
  );
}

export default function TopUp() {
  const { game } = useParams();
  const selectedGame = getGame(game);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [playerId, setPlayerId] = useState("");
  const [serverId, setServerId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(
    () =>
      selectedGame.packages.find(
        (item) => item.id === selectedPackage
      ),
    [selectedGame, selectedPackage]
  );

  const canContinue =
    Boolean(selected) && playerId.trim().length >= 3;

  function handleContinue() {
    if (!canContinue) return;
    setSubmitted(true);
  }

  return (
    <div className="topup-page">
      <div className="topup-background" />

      <header className="topup-header">
        <div className="container topup-nav">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>

          <Link to="/" className="brand">
            <span className="brand-mark">N</span>
            <span>
              <strong>NOSU</strong>
              <small>TOPUP</small>
            </span>
          </Link>

          <div className="secure-badge">
            <ShieldCheck size={15} />
            Secure
          </div>
        </div>
      </header>

      <main className="container topup-main">
        <motion.div
          className="topup-heading"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={`game-logo ${selectedGame.color}`}>
            {selectedGame.short}
          </div>

          <div>
            <span>{selectedGame.category}</span>
            <h1>{selectedGame.name} Top-Up</h1>
            <p>
              Select your package and enter your player
              information to continue.
            </p>
          </div>
        </motion.div>

        <div className="topup-layout">
          <section className="topup-card package-card">
            <div className="card-heading">
              <div>
                <span className="step-number">01</span>
                <div>
                  <h2>Select Package</h2>
                  <p>Choose the amount you want to purchase.</p>
                </div>
              </div>
            </div>

            <div className="package-grid">
              {selectedGame.packages.map((item) => {
                const active = selectedPackage === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    className={`package-item ${
                      active ? "selected" : ""
                    }`}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedPackage(item.id);
                      setSubmitted(false);
                    }}
                  >
                    {item.bonus && (
                      <span className="package-bonus">
                        {item.bonus}
                      </span>
                    )}

                    <div className="package-check">
                      {active && <Check size={14} />}
                    </div>

                    <div className="package-icon">
                      {selectedGame.short}
                    </div>

                    <strong>{item.title}</strong>

                    <span className="package-price">
                      ৳{item.price}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </section>

          <aside className="topup-side">
            <section className="topup-card player-card">
              <div className="card-heading">
                <div>
                  <span className="step-number">02</span>
                  <div>
                    <h2>Player Information</h2>
                    <p>Enter your in-game account details.</p>
                  </div>
                </div>
              </div>

              <label>
                Player ID
                <div className="input-with-icon">
                  <UserRound size={17} />
                  <input
                    value={playerId}
                    onChange={(event) => {
                      setPlayerId(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Enter Player ID"
                    inputMode="numeric"
                  />
                </div>
              </label>

              <label>
                Server ID
                <div className="input-with-icon">
                  <span className="input-prefix">#</span>
                  <input
                    value={serverId}
                    onChange={(event) =>
                      setServerId(event.target.value)
                    }
                    placeholder="Optional"
                    inputMode="numeric"
                  />
                </div>
              </label>

              <div className="id-help">
                <ShieldCheck size={16} />
                <span>
                  Please make sure your Player ID is correct.
                </span>
              </div>
            </section>

            <section className="summary-card">
              <div className="summary-title">
                <span>ORDER SUMMARY</span>
                <Zap size={16} />
              </div>

              <div className="summary-row">
                <span>Game</span>
                <strong>{selectedGame.name}</strong>
              </div>

              <div className="summary-row">
                <span>Package</span>
                <strong>
                  {selected?.title || "Not selected"}
                </strong>
              </div>

              <div className="summary-row">
                <span>Player ID</span>
                <strong>{playerId || "—"}</strong>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Total</span>
                <strong>
                  ৳{selected?.price?.toLocaleString() || "0"}
                </strong>
              </div>

              <button
                type="button"
                className="continue-btn"
                disabled={!canContinue}
                onClick={handleContinue}
              >
                Continue to Checkout
                <ArrowRight size={18} />
              </button>

              {!canContinue && (
                <p className="checkout-note">
                  Select a package and enter your Player ID.
                </p>
              )}

              {submitted && (
                <div className="success-message">
                  <Check size={17} />
                  Information ready for checkout.
                </div>
              )}
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
