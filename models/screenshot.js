const mongoose = require("mongoose");

const screenshotSchema = new mongoose.Schema(
  {
    screenshotList: [
      {
        type: String,
        required: [true, "screenshot not specified"],
      },
    ],
    feature: {
      type: String,
      required: [true, "feature not specified"],
      trim: true,
      max: 10,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Video", screenshotSchema);
