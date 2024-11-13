const express = require("express");
const { createUser } = require("../controller/userController");

// Intialize the router object to add router in a new file

const userRouter = express.Router();

userRouter.post("/", createUser);

module.exports = userRouter;
