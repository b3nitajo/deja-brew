const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const methodSchema = new Schema({
    method: { type: String, required: true },
    grind_size: { type: String, required: true },
    ground_coffee: { type: String, required: true },
    water: { type: String, required: true },
    paper_filter: { type: Boolean, default: true },
    ending_cups: { type: String, required: true },
    other_equipment: { type: Array, Required: true },
    preparation: { type: Array, required: true },
    instructions: { type: Array, required: true },
    difficulty: { type: String, requireed: true },
    information: { type: String, required: true }

  });
  
  const Method = mongoose.model("Method", methodSchema);


module.exports = Method;
