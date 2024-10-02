const router = require("express").Router();

const authController = require("./controllers/authController")
const recipeController = require("./controllers/recipeController")

router.use(authController)
router.use(recipeController)

module.exports = router
