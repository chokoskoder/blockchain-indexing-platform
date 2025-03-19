const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const indexRoutes = require("./routes/indexRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/index", indexRoutes);

module.exports = app;
