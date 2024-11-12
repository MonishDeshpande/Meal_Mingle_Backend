const express = require("express");
const bodyParser = require("body-parser");
const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

const PORT = ServerConfig.PORT;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
