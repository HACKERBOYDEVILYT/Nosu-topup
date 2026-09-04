import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Home,
  PackageCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";

import "./OrderSuccess.css";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);

  const orderData = location.state || {};

  const game = orderData.game || {
    name: "Free Fire",
    slug: "free-fire",
  };

  const packageData = orderData.package || {
    name: "100 Diamonds",
    price: 80,
  };

  const playerId = orderData.playerId || "Not provided";
  const serverId = orderData.serverId || "";
  const paymentMethod = orderData.paymentMethod || "bkash";
  const total = Number(orderData.total || packageData.price || 0);

  /*
    Demo order ID.

    Later this will come directly from:
    NOSU Backend → EpInby API → Real Order ID
  */
  const orderId =
    orderData.orderId ||
    `NOSU-${Date.now().toString().slice(-8)}`;

  const paymentName =
    paymentMethod.charAt(0).toUpperCase() +
    paymentMethod.slice(1);

  const copyOrderId = async () => {
    try {
      await navigator.clipboard.writeText(orderId);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="success-page">
      {/* Background */}
      <div className="success-grid" />

      <div className="success-glow success-glow-one" />
      <div className="success-glow success-glow-two" />

      {/* Header */}
      <header className="success-header">
        <div className="container success-header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">N</span>

            <span>
              <strong>NOSU</strong>
              <small>TOPUP</small>
            </span>
          </Link>

          <div className="success-header-status">
            <span />
            Order Processing
          </div>
        </div>
      </header>

      <main className="success-main">
        <div className="container">
          {/* Success Icon */}
          <motion.div
            className="success-icon-wrapper"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: 0.1,
            }}
          >
            <div className="success-ring success-ring-one" />
            <div className="success-ring success-ring-two" />

            <div className="success-icon">
              <Check size={42} strokeWidth={3} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="success-heading"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.25,
            }}
          >
            <span className="success-kicker">
              PAYMENT RECEIVED
            </span>

            <h1>Order placed successfully!</h1>

            <p>
              Your order has been received. Your top-up is being
              processed and will be delivered shortly.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="success-card"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            {/* Order ID */}
            <div className="success-order-id">
              <div>
                <span>ORDER ID</span>
                <strong>{orderId}</strong>
              </div>

              <button
                type="button"
                className="copy-order-button"
                onClick={copyOrderId}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="success-divider" />

            {/* Product */}
            <div className="success-product">
              <div className="success-product-icon">
                <Zap size={23} />
              </div>

              <div className="success-product-info">
                <span>GAME TOP-UP</span>
                <h2>{game.name}</h2>
                <p>{packageData.name}</p>
              </div>

              <div className="success-delivery-badge">
                <CheckCircle2 size={15} />
                Processing
              </div>
            </div>

            {/* Details */}
            <div className="success-details">
              <div className="success-detail">
                <span>Player ID</span>
                <strong>{playerId}</strong>
              </div>

              {serverId && (
                <div className="success-detail">
                  <span>Server ID</span>
                  <strong>{serverId}</strong>
                </div>
              )}

              <div className="success-detail">
                <span>Payment Method</span>
                <strong>{paymentName}</strong>
              </div>

              <div className="success-detail">
                <span>Order Status</span>
                <strong className="processing-status">
                  <span />
                  Processing
                </strong>
              </div>
            </div>

            <div className="success-divider" />

            {/* Amount */}
            <div className="success-amount">
              <div>
                <span>Total Paid</span>
                <small>Payment completed successfully</small>
              </div>

              <strong>৳{total}</strong>
            </div>
          </motion.div>

          {/* Processing Info */}
          <motion.div
            className="success-processing"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <div className="processing-icon">
              <PackageCheck size={20} />
            </div>

            <div>
              <strong>Your top-up is on the way</strong>

              <p>
                Please keep your Order ID for future reference.
                Delivery time may vary depending on the game
                provider.
              </p>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            className="success-security"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.65,
            }}
          >
            <ShieldCheck size={17} />

            <span>
              Your transaction is protected by NOSU TOPUP
              secure order processing.
            </span>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="success-actions"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
          >
            <button
              type="button"
              className="success-secondary-button"
              onClick={() => navigate("/")}
            >
              <Home size={17} />
              Back to Home
            </button>

            <button
              type="button"
              className="success-primary-button"
              onClick={() =>
                navigate("/dashboard/orders")
              }
            >
              Track Order
              <ArrowRight size={17} />
            </button>
          </motion.div>

          {/* Bottom Note */}
          <motion.p
            className="success-bottom-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            Need help with this order?
            <a href="#support"> Contact Support</a>
          </motion.p>
        </div>
      </main>

      {/* Footer */}
      <footer className="success-footer">
        <div className="container">
          <span>
            © {new Date().getFullYear()} NOSU TOPUP
          </span>

          <div>
            <span>Secure Payments</span>
            <span>•</span>
            <span>Fast Delivery</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
