const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    username: {type: String, required: true},
    method: { type: String, required: true },
    grind_size: String,
    ground_coffee: String,
    water: String,
    preparation:[{
        step1: String,
        step2: String,
        step3: String,
        Step4: String     
     }],
     instructions:[{
        step1: String,
        step2: String,
        step3: String,
        Step4: String     
     }],
    date: { type: Date, default: Date.now }, 
});


const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;