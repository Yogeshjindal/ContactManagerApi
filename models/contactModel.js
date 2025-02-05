const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "PLZ Enter The NAME"],
    },
    email: {
      type: String,
      required: [true, "PLZ Enter The EMAIL"],
    },
    phone: {
      type: String,
      required: [true, "PLZ Enter The CONTACT NO."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
