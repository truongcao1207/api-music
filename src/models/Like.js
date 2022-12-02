const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Like = new Schema(
  {
    songId: {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", Like);
