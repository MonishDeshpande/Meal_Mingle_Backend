const express = require("express");

const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");

const app = express();

const PORT = ServerConfig.PORT;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});

