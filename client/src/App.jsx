import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function Placeholder({ title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <p style={{ color: "#8d93a6", marginTop: 8 }}>
          NOSU TOPUP — Coming Soon
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={<Placeholder title="Login" />}
      />

      <Route
        path="/register"
        element={<Placeholder title="Register" />}
      />

      <Route
        path="/dashboard"
        element={<Placeholder title="Dashboard" />}
      />

      <Route
        path="/admin"
        element={<Placeholder title="Admin Panel" />}
      />

      <Route
        path="*"
        element={<Placeholder title="404" />}
      />
    </Routes>
  );
  <Route
  path="/checkout"
  element={<Checkout />}
/>
}
