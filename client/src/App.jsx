import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TopUp from "./pages/TopUp";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import DashboardOrders from "./pages/DashboardOrders";

import "./pages/TopUp.css";

function Placeholder({ title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
        background: "#07080d",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>{title}</h1>

        <p
          style={{
            color: "#8d93a6",
            marginTop: 8,
          }}
        >
          NOSU TOPUP — Coming Soon
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Top-Up */}
      <Route
        path="/topup/:game"
        element={<TopUp />}
      />

      {/* Checkout */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />

      {/* Order Success */}
      <Route
        path="/order-success"
        element={<OrderSuccess />}
      />

      {/* Dashboard Orders */}
      <Route
        path="/dashboard/orders"
        element={<DashboardOrders />}
      />

      {/* Auth */}
      <Route
        path="/login"
        element={<Placeholder title="Login" />}
      />

      <Route
        path="/register"
        element={<Placeholder title="Register" />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<Placeholder title="Dashboard" />}
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={<Placeholder title="Admin Panel" />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<Placeholder title="404" />}
      />
    </Routes>
  );
}
