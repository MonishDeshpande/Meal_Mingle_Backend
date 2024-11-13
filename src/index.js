const express = require("express");
const bodyParser = require("body-parser");
const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const User = require("./schema/userSchema");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use("/users", userRouter);
app.use("/carts", cartRouter);
const PORT = ServerConfig.PORT;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
  // const newUser = await User.create({
  //   firstName: "Johnathan",
  //   lastName: "Majors",
  //   email: "a@b.com",
  //   password: "12345678",
  //   mobileNumber: "1234567890",
  // });
  // console.log("New User Created");
  // console.log(newUser);
});
