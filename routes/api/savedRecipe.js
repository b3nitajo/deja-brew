const router = require("express").Router();
const Recipe = require("../../models/savedRecipe");

// api/saved/
router.post('/', (req, res) => {
    Recipe.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  });
  module.exports = router;