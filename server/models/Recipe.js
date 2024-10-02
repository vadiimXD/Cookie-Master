const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name min length is 2!"],
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    calories: {
        type: Number,
        required: true,
        trim: true,
        min:[1,"calories must be at least 1 calorie"]
    },
    time: {
        type: Number,
        required: true,
        trim: true,
        min:[1,"time must be at least 1 minute"]
    },
    recipe: {
        type: String,
        required: true,
        trim: true,
        minLength: [5, "Recipe min length is 4!"],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
})


const Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe;
