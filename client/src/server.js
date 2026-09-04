import "dotenv/config";

import express from "express";
import cors from "cors";

import topupRoutes from "./routes/topupRoutes.js";

const app = express();

const PORT =
  Number(process.env.PORT) || 5000;

const CLIENT_URL =
  process.env.CLIENT_URL ||
  "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL,
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "NOSU TOPUP API",
    version: "1.0.0",
    status: "online",
  });
});

app.use("/api/topup", topupRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});

app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

app.listen(PORT, () => {
  console.log("");
  console.log("================================");
  console.log("       NOSU TOPUP API");
  console.log("================================");
  console.log(`Server: http://localhost:${PORT}`);
  console.log(
    `Health: http://localhost:${PORT}/api/topup/health`
  );
  console.log("================================");
  console.log("");
});
