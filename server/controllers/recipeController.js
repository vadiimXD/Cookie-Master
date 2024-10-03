const router = require("express").Router();

const recipeService = require("../services/recipeService");



router.post("/create", async (req, res) => {
    console.log(req.body, " from controller")
    try {
        await recipeService.createOffer(req.body)
        res.send({ created: true })
    } catch (error) {
        res.send(error.message)

    }
})


router.get("/catalog", async (req, res) => {
    try {
        const recipes = await recipeService.getAllRecipes()
        res.json(recipes)
    } catch (error) {
        res.send(error.message)

    }
})

router.get("/last", async (req, res) => {
    try {
        const shoes = await recipeService.getLastShoes()
        res.json(shoes)
    } catch (error) {
        res.send(error.message)

    }
})

router.get("/details/:recipeId", async (req, res) => {
    try {
        const product = await recipeService.getOneProduct(req.params.recipeId);
        res.json(product)
    } catch (error) {
        res.send(error.message)

    }
})


router.post("/buy", async (req, res) => {
    try {
        await phonesService.buyProduct(req.body.phoneId, req.body.userId)
        res.send(true)
    } catch (error) {
        res.send(error.message)

    }
})

router.post("/edit", async (req, res) => {
    try {
        await recipeService.updateProduct(req.body._id, req.body)
        res.send({ edited: true })
    } catch (error) {
        res.send(error.message)

    }
})

router.delete("/delete/:recipeId", async (req, res) => {
    try {
        await recipeService.deleteProduct(req.params.shoeId)
        res.send({ deleted: true })
    } catch (error) {
        res.send(error.message)

    }
})

router.post("/search", async (req, res) => {
    try {
        console.log(req.body.brand, "brand")
        const shoes = await recipeService.searchProducts(req.body.brand)
        console.log(shoes, "shoes")
        res.json(shoes)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/like", async (req, res) => {
    try {

        const shoe = await recipeService.addLike(req.body.userId, req.body.shoeId)
        console.log(shoe.likes)
        res.json(shoe.likes)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/unlike", async (req, res) => {
    try {
        const shoe = await recipeService.removeLike(req.body.userId, req.body.shoeId)
        console.log(shoe.likes)
        res.json(shoe.likes)
    } catch (error) {
        res.send(error.message)
    }
})

router.get("/likes/:recipeId", async (req, res) => {
    try {
        const shoe = await recipeService.getOneProduct(req.params.shoeId);
        res.json(shoe.likes)
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = router