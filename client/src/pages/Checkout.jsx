import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Checkout.css";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Zap,
} from "lucide-react";

const paymentMethods = [
  {
    id: "bkash",
    name: "bKash",
    description: "Pay with bKash",
    icon: Smartphone,
  },
  {
    id: "nagad",
    name: "Nagad",
    description: "Pay with Nagad",
    icon: WalletCards,
  },
  {
    id: "rocket",
    name: "Rocket",
    description: "Pay with Rocket",
    icon: CreditCard,
  },
];

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const orderData = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);

  const game = orderData.game || {
    name: "Free Fire",
    slug: "free-fire",
  };

  const packageData = orderData.package || {
    name: "100 Diamonds",
    price: 80,
  };

  const playerId = orderData.playerId || "";
  const serverId = orderData.serverId || "";

  const total = useMemo(() => {
    return Number(packageData.price || 0);
  }, [packageData.price]);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!phone.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (phone.trim().length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }

    setProcessing(true);

    /*
      DEMO PAYMENT FLOW

      Later this button will connect with:
      Frontend → NOSU Backend → EpInby API → Payment Gateway
    */

    setTimeout(() => {
      setProcessing(false);

      navigate("/order-success", {
        state: {
          game,
          package: packageData,
          playerId,
          serverId,
          paymentMethod,
          phone,
          total,
        },
      });
    }, 1200);
  };

  return (
    <div className="checkout-page">
      {/* Background */}
      <div className="checkout-bg-grid" />
      <div className="checkout-glow checkout-glow-one" />
      <div className="checkout-glow checkout-glow-two" />

      {/* Header */}
      <header className="checkout-header">
        <div className="container checkout-header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">N</span>

            <span>
              <strong>NOSU</strong>
              <small>TOPUP</small>
            </span>
          </Link>

          <div className="checkout-security">
            <LockKeyhole size={16} />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="checkout-main">
        <div className="container">
          {/* Back */}
          <motion.div
            className="checkout-back"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="back-button"
            >
              <ArrowLeft size={17} />
              Back to Top-Up
            </button>
          </motion.div>

          {/* Title */}
          <motion.div
            className="checkout-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">CHECKOUT</span>

            <h1>Complete your order</h1>

            <p>
              Review your order details and choose your preferred
              payment method.
            </p>
          </motion.div>

          <form
            className="checkout-layout"
            onSubmit={handlePayment}
          >
            {/* LEFT */}
            <motion.div
              className="checkout-left"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Order Information */}
              <section className="checkout-card">
                <div className="checkout-card-heading">
                  <div className="checkout-heading-icon">
                    <Zap size={19} />
                  </div>

                  <div>
                    <h2>Order Information</h2>
                    <p>Make sure your details are correct.</p>
                  </div>
                </div>

                <div className="checkout-game-box">
                  <div className="checkout-game-logo">
                    <span>{game.name?.charAt(0) || "N"}</span>
                  </div>

                  <div className="checkout-game-info">
                    <span className="checkout-label">GAME</span>
                    <h3>{game.name}</h3>
                  </div>

                  <div className="checkout-game-badge">
                    Instant
                  </div>
                </div>

                <div className="checkout-details-grid">
                  <div className="checkout-detail">
                    <span>Package</span>
                    <strong>{packageData.name}</strong>
                  </div>

                  <div className="checkout-detail">
                    <span>Player ID</span>
                    <strong>
                      {playerId || "Not provided"}
                    </strong>
                  </div>

                  {serverId && (
                    <div className="checkout-detail">
                      <span>Server ID</span>
                      <strong>{serverId}</strong>
                    </div>
                  )}

                  <div className="checkout-detail">
                    <span>Delivery</span>
                    <strong className="instant-text">
                      <CheckCircle2 size={15} />
                      Instant
                    </strong>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className="checkout-card">
                <div className="checkout-card-heading">
                  <div className="checkout-heading-icon">
                    <CreditCard size={19} />
                  </div>

                  <div>
                    <h2>Payment Method</h2>
                    <p>Select how you want to pay.</p>
                  </div>
                </div>

                <div className="payment-methods">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    const selected =
                      paymentMethod === method.id;

                    return (
                      <button
                        key={method.id}
                        type="button"
                        className={`payment-method ${
                          selected ? "selected" : ""
                        }`}
                        onClick={() =>
                          setPaymentMethod(method.id)
                        }
                      >
                        <div className="payment-icon">
                          <Icon size={20} />
                        </div>

                        <div className="payment-info">
                          <strong>{method.name}</strong>
                          <span>{method.description}</span>
                        </div>

                        <div className="payment-radio">
                          {selected && <span />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="checkout-input-group">
                  <label htmlFor="phone">
                    Payment Mobile Number
                  </label>

                  <div className="checkout-input-wrap">
                    <Smartphone size={18} />

                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder="01XXXXXXXXX"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value)
                      }
                      maxLength={15}
                    />
                  </div>

                  <small>
                    Enter the mobile number you will use for
                    payment.
                  </small>
                </div>
              </section>

              {/* Security */}
              <div className="checkout-secure-note">
                <ShieldCheck size={20} />

                <div>
                  <strong>Your payment is secure</strong>
                  <p>
                    We protect your transaction and never store
                    sensitive payment credentials.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.aside
              className="checkout-right"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="checkout-summary">
                <div className="summary-heading">
                  <div>
                    <span className="checkout-label">
                      ORDER SUMMARY
                    </span>

                    <h2>Your Order</h2>
                  </div>

                  <div className="summary-check">
                    <CheckCircle2 size={19} />
                  </div>
                </div>

                <div className="summary-product">
                  <div className="summary-product-icon">
                    <Zap size={20} />
                  </div>

                  <div>
                    <strong>{game.name}</strong>
                    <span>{packageData.name}</span>
                  </div>
                </div>

                <div className="summary-divider" />

                <div className="summary-row">
                  <span>Package</span>
                  <strong>{packageData.name}</strong>
                </div>

                <div className="summary-row">
                  <span>Player ID</span>
                  <strong>
                    {playerId || "—"}
                  </strong>
                </div>

                {serverId && (
                  <div className="summary-row">
                    <span>Server ID</span>
                    <strong>{serverId}</strong>
                  </div>
                )}

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>৳{total}</strong>
                </div>

                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <strong className="free-text">
                    FREE
                  </strong>
                </div>

                <div className="summary-divider" />

                <div className="summary-total">
                  <div>
                    <span>Total</span>
                    <small>Payable amount</small>
                  </div>

                  <strong>৳{total}</strong>
                </div>

                <button
                  type="submit"
                  className="checkout-pay-button"
                  disabled={processing}
                >
                  {processing ? (
                    <>
                      <span className="button-spinner" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay ৳{total}
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <div className="summary-security">
                  <LockKeyhole size={14} />
                  <span>Secure encrypted transaction</span>
                </div>
              </div>

              <div className="checkout-help-card">
                <div className="help-icon">
                  ?
                </div>

                <div>
                  <strong>Need help?</strong>
                  <p>
                    Contact NOSU TOPUP support if you have
                    any problem with your order.
                  </p>

                  <a href="#support">Contact Support</a>
                </div>
              </div>
            </motion.aside>
          </form>
        </div>
      </main>

      <footer className="checkout-footer">
        <div className="container">
          <span>
            © {new Date().getFullYear()} NOSU TOPUP
          </span>

          <div>
            <span>Secure Checkout</span>
            <span>•</span>
            <span>Instant Delivery</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
