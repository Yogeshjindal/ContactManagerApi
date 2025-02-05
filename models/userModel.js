const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "plz add the name"],
    },
    email: {
      type: String,
      required: [true, "Plz add email address"],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "Plz add password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
