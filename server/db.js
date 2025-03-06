const mongoose = require("mongoose");

// const connectionString = process.env.DATABASE_URL;
const connectionString = "mongodb://127.0.0.1:27017/fresh-car";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

module.exports = mongoose.connection;
