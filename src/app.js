const express = require("express");
const { Pool } = require("pg");
const { createClient } = require("redis");

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Redis connection
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

redisClient.connect();

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Cloud Native API v2 is running",
    status: "healthy"
  });
});

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// PostgreSQL test
app.get("/db-check", async (req, res) => {
  const result = await pool.query(
    "SELECT current_database(), current_user"
  );

  res.json(result.rows[0]);
});

// Redis test
app.get("/cache-check", async (req, res) => {
  await redisClient.set("message", "Redis is working");

  const value = await redisClient.get("message");

  res.json({
    cache: value
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API listening on port ${PORT}`);
});

