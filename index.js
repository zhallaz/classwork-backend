const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./router/user.router.js");
const productRoute = require("./router/product.Route.js");

const app = express();
const corsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allows cookies/headers if you use auth sessions
};
const PORT = process.env.PORT || 5000; // Added fallback port

// 1. MUST come before routes to parse JSON request bodies
app.use(express.json());
app.use(cors(corsOptions));

// 2. Corrected routes (removed the "=" typo)
app.use("/api/auth", userRoute);
app.use("/api/products", productRoute);

app.get("/", (req, res, next) => {
  res.send("Hello Emma! Your root route is working.");
});

// 3. Optional: Add your MongoDB connection string here
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection errorn:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
