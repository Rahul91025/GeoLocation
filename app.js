const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const booleanRoutes = require("./routes/booleanRoutes");

dotenv.config();
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // To parse JSON requests

// Routes
app.use("/api", booleanRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
