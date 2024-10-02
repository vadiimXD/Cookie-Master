const Recipe = require("../models/Recipe")
const User = require("../models/User")

exports.getAllShoes = () => Recipe.find();

exports.getLastShoes = () => Recipe.find().sort({ _id: -1 }).limit(3);

exports.updateProduct = (productId, body) => Recipe.findByIdAndUpdate(productId, body, { runValidators: true });

exports.getOneProduct = (productId) => Recipe.findById(productId);

exports.deleteProduct = (productId) => Recipe.findByIdAndDelete(productId);

exports.addLike = async (userId, recipeId) => {
    await Shoe.findByIdAndUpdate(recipeId, { $push: { likes: userId } })

    return await this.getOneProduct(shoeId)
}

exports.removeLike = async (userId, recipeId) => {
    await Shoe.findByIdAndUpdate(recipeId, { $pull: { likes: userId } })

    return await this.getOneProduct(recipeId)

}

exports.createOffer = async (body) => {
    return await Recipe.create(body)
    // const product = await Recipe.findOne({ model: body.model })
    // await User.findByIdAndUpdate(body.owner, { $push: { addedShoes: product._id } })
    // return product
}

exports.searchProducts = async (brand) => {
    const query = {};

    if (brand) {
        const brandRegex = new RegExp('^' + brand, 'i');
        query.brand = { $regex: brandRegex }
    }

    if (!brand) {
        return undefined
    }

    return await Shoe.find(query)

}
