const express = require("express");

const ServerConfig = require("./config/serverConfig");
const app = express();
const PORT = ServerConfig.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
