const mongoose = require("mongoose");
const ServerConfig = require("./serverConfig");

async function connectDB() {
  try {
    await mongoose.connect(ServerConfig.DB_URL);
    console.log("Successfully connected to Mongo DB database");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
}

module.exports = connectDB;
