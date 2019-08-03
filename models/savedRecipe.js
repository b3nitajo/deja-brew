const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const RecipeSchema = new Schema({
  method: { type: String, required: true }
});

module.exports = SavedRecipe = mongoose.model('saved_recipe', RecipeSchema);
