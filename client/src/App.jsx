import { Routes, Route, Navigate } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>NOSU TOPUP</h1>
      <p>Gaming Top-Up Platform</p>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}
