const router = require("express").Router();
const methodsController = require("../../controllers/methodsController");

// Matches with "/api/methods"
router.route("/")
  .get(methodsController.findAll)
  .post(methodsController.create);

// Matches with "/api/methods/:id"
router
  .route("/:id")
  .get(methodsController.findById)
  .put(methodsController.update)
  .delete(methodsController.remove);

  router
 .route("/methods/:difficulty")
 .get(methodsController.findByDifficulty)

module.exports = router;
