import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Copy,
  Gamepad2,
  Home,
  Package,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  WalletCards,
  XCircle,
  Zap,
} from "lucide-react";

import "./DashboardOrders.css";

const DEMO_ORDERS = [
  {
    id: "NOSU-84729163",
    game: "Free Fire",
    slug: "free-fire",
    packageName: "100 Diamonds",
    playerId: "123456789",
    serverId: "",
    paymentMethod: "bKash",
    amount: 80,
    status: "processing",
    createdAt: "Just now",
  },
  {
    id: "NOSU-51268420",
    game: "PUBG Mobile",
    slug: "pubg-mobile",
    packageName: "60 UC",
    playerId: "987654321",
    serverId: "",
    paymentMethod: "Nagad",
    amount: 110,
    status: "completed",
    createdAt: "Today",
  },
  {
    id: "NOSU-30194827",
    game: "Mobile Legends",
    slug: "mobile-legends",
    packageName: "86 Diamonds",
    playerId: "456789123",
    serverId: "1234",
    paymentMethod: "Rocket",
    amount: 95,
    status: "failed",
    createdAt: "Yesterday",
  },
];

const statusConfig = {
  processing: {
    label: "Processing",
    icon: Clock3,
    className: "processing",
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "completed",
  },
  failed: {
    label: "Failed",
    icon: XCircle,
    className: "failed",
  },
};

export default function DashboardOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState(DEMO_ORDERS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [copiedId, setCopiedId] = useState("");

  const filteredOrders = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesSearch =
        !keyword ||
        order.id.toLowerCase().includes(keyword) ||
        order.game.toLowerCase().includes(keyword) ||
        order.packageName.toLowerCase().includes(keyword) ||
        order.playerId.toLowerCase().includes(keyword);

      const matchesFilter =
        filter === "all" || order.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [orders, search, filter]);

  const copyOrderId = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId("");
      }, 1600);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  };

  const refreshOrders = () => {
    setOrders([...DEMO_ORDERS]);
  };

  const openOrder = (order) => {
    navigate("/order-success", {
      state: {
        orderId: order.id,
        game: {
          name: order.game,
          slug: order.slug,
        },
        package: {
          name: order.packageName,
          price: order.amount,
        },
        playerId: order.playerId,
        serverId: order.serverId,
        paymentMethod: order.paymentMethod.toLowerCase(),
        total: order.amount,
      },
    });
  };

  return (
    <div className="orders-page">
      <div className="orders-bg-grid" />
      <div className="orders-glow orders-glow-one" />
      <div className="orders-glow orders-glow-two" />

      <header className="orders-header">
        <div className="container orders-header-inner">
          <Link to="/" className="orders-brand">
            <span className="orders-brand-mark">N</span>

            <span className="orders-brand-text">
              <strong>NOSU</strong>
              <small>TOPUP</small>
            </span>
          </Link>

          <div className="orders-header-right">
            <div className="secure-mini">
              <ShieldCheck size={16} />
              <span>Secure Account</span>
            </div>

            <Link to="/" className="home-mini">
              <Home size={17} />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container orders-main">
        <motion.div
          className="orders-title-area"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            className="back-dashboard"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <div>
            <div className="orders-eyebrow">
              <Package size={16} />
              ACCOUNT
            </div>

            <h1>
              My <span>Orders</span>
            </h1>

            <p>
              Track and manage all your NOSU TOPUP orders
              from one place.
            </p>
          </div>
        </motion.div>

        <section className="orders-toolbar">
          <div className="orders-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search order ID, game or player ID..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <div className="orders-filters">
            {[
              ["all", "All"],
              ["processing", "Processing"],
              ["completed", "Completed"],
              ["failed", "Failed"],
            ].map(([value, label]) => (
              <button
                key={value}
                className={
                  filter === value ? "active" : ""
                }
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="refresh-orders"
            onClick={refreshOrders}
            title="Refresh orders"
          >
            <RefreshCw size={18} />
            <span>Refresh</span>
          </button>
        </section>

        <section className="orders-summary">
          <div className="summary-box">
            <div className="summary-icon orange">
              <Package size={20} />
            </div>

            <div>
              <strong>{orders.length}</strong>
              <span>Total Orders</span>
            </div>
          </div>

          <div className="summary-box">
            <div className="summary-icon yellow">
              <Clock3 size={20} />
            </div>

            <div>
              <strong>
                {
                  orders.filter(
                    (order) => order.status === "processing"
                  ).length
                }
              </strong>
              <span>Processing</span>
            </div>
          </div>

          <div className="summary-box">
            <div className="summary-icon green">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <strong>
                {
                  orders.filter(
                    (order) => order.status === "completed"
                  ).length
                }
              </strong>
              <span>Completed</span>
            </div>
          </div>

          <div className="summary-box">
            <div className="summary-icon cyan">
              <Zap size={20} />
            </div>

            <div>
              <strong>
                ৳
                {orders.reduce(
                  (total, order) => total + order.amount,
                  0
                )}
              </strong>
              <span>Total Spent</span>
            </div>
          </div>
        </section>

        <section className="orders-list-section">
          <div className="section-heading">
            <div>
              <h2>Order History</h2>
              <p>
                {filteredOrders.length} order
                {filteredOrders.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {filteredOrders.length === 0 ? (
            <motion.div
              className="empty-orders"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="empty-icon">
                <Package size={30} />
              </div>

              <h3>No orders found</h3>

              <p>
                Try changing your search or filter, or place
                your first order.
              </p>

              <Link
                to="/topup/free-fire"
                className="primary-order-btn"
              >
                <Gamepad2 size={18} />
                Start Top-Up
              </Link>
            </motion.div>
          ) : (
            <div className="orders-grid">
              {filteredOrders.map((order, index) => {
                const status =
                  statusConfig[order.status] ||
                  statusConfig.processing;

                const StatusIcon = status.icon;

                return (
                  <motion.article
                    className="order-card"
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <div className="order-card-top">
                      <div className="order-game">
                        <div className="order-game-icon">
                          <Gamepad2 size={22} />
                        </div>

                        <div>
                          <h3>{order.game}</h3>
                          <span>{order.createdAt}</span>
                        </div>
                      </div>

                      <div
                        className={`order-status ${status.className}`}
                      >
                        <StatusIcon size={14} />
                        {status.label}
                      </div>
                    </div>

                    <div className="order-id-row">
                      <span>ORDER ID</span>

                      <button
                        onClick={() =>
                          copyOrderId(order.id)
                        }
                      >
                        {order.id}
                        {copiedId === order.id ? (
                          <CheckCircle2 size={15} />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>
                    </div>

                    <div className="order-details">
                      <div>
                        <span>Package</span>
                        <strong>{order.packageName}</strong>
                      </div>

                      <div>
                        <span>Player ID</span>
                        <strong>{order.playerId}</strong>
                      </div>

                      {order.serverId && (
                        <div>
                          <span>Server ID</span>
                          <strong>{order.serverId}</strong>
                        </div>
                      )}

                      <div>
                        <span>Payment</span>
                        <strong>
                          <WalletCards size={14} />
                          {order.paymentMethod}
                        </strong>
                      </div>
                    </div>

                    <div className="order-card-bottom">
                      <div className="order-amount">
                        <span>Total</span>
                        <strong>৳{order.amount}</strong>
                      </div>

                      <button
                        className="view-order-btn"
                        onClick={() => openOrder(order)}
                      >
                        View Details
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </section>

        <section className="orders-help">
          <div className="help-icon">
            <Smartphone size={23} />
          </div>

          <div>
            <strong>Need help with an order?</strong>
            <p>
              If your top-up is delayed or something went
              wrong, contact NOSU TOPUP support.
            </p>
          </div>

          <a href="#support" className="help-link">
            Contact Support
            <ArrowRight size={16} />
          </a>
        </section>
      </main>

      <footer className="orders-footer">
        <div className="container">
          <span>
            © {new Date().getFullYear()} NOSU TOPUP
          </span>

          <span>
            <ShieldCheck size={14} />
            Secure Gaming Top-Up
          </span>
        </div>
      </footer>
    </div>
  );
}
