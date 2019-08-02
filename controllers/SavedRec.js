const User = require("../models/User");
const Recipe = require("../models/SavedRec");
// const auth = require('../middleware/auth');
module.exports = {
searchSavedRecipe: async(req, res)=> {
  User.findById(req.body.name)
  .then(user => res.json(user));
  
},

saveNewRecipe: async (req, res)=> {
  const recipes = new Recipe(req.body)
  const user1 = await User.findById(req.body.id)
  recipes.user2 = user1
  await recipes.save();
  user1.savedrecipe.push(recipes);
  await user1.saved();
  res.status(200).json(user1)
}
};