const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const recipe = new Schema({
  method: { type: String, required: false },
  user2: {
      type: Schema.Types.ObjectId,
      ref: 'user2'
  }
});

module.exports = SavedRec = mongoose.model("saved_recipes", recipe);
