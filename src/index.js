const express = require("express");
const bodyParser = require("body-parser");
const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const User = require("./schema/userSchema");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const authRouter = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
const { isLoggedIn } = require("./validation/authValidator");
const uploader = require("./middlewares/multerMiddleware");
const cloduinary = require("./config/cloudinaryConfig");
const fs = require("fs/promises");
const productRouter = require("./routes/productRoute");

// Flow -> index -> route -> controller -> service -> repository -> schema
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use("/users", userRouter);
app.use("/carts", cartRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.get("/ping", isLoggedIn, (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.json({ message: "Pong" });
});

// Photo api cloduinary check --- >> multer
app.post("/photo", uploader.single("incommingFile"), async (req, res) => {
  console.log(req.file);
  const result = await cloduinary.uploader.upload(req.file.path);
  console.log("result from cloudinary ", result);
  await fs.unlink(req.file.path);
  res.json({ message: "ok" });
});

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
