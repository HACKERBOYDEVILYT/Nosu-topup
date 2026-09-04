import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  UserRound,
  ShoppingBag,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          <span>
            <strong>NOSU</strong>
            <small>TOPUP</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <a href="#games" onClick={() => setOpen(false)}>
            Games
          </a>

          <a href="#how-it-works" onClick={() => setOpen(false)}>
            How It Works
          </a>

          <a href="#support" onClick={() => setOpen(false)}>
            Support
          </a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn desktop-only" aria-label="Search">
            <Search size={19} />
          </button>

          <Link
            to="/login"
            className="login-btn desktop-only"
          >
            <UserRound size={17} />
            Login
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}
