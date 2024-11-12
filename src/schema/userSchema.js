const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true, // Extra whitespace will be removed from the beginning and end of the string
      lowercase: true,
      minlength: [3, "First name must be at least 3 characters long"],
      maxlength: [30, "First name must be at most 30 characters long"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true, // Extra whitespace will be removed from the beginning and end of the string
      lowercase: true,
      minlength: [3, "last Name must be at least 3 characters long"],
      maxlength: [30, "last name must be at most 30 characters long"],
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: [10, "Mobile number must be at least 10 characters long"],
      maxlength: [10, "Mobile number must be at most 10 characters long"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [30, "Password must be at most 30 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
