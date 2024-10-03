import { useEffect, useState } from "react";
import "./Catalog.css"
import { RecipeType } from "../../types/RecipeType";
import requester from "../../utils/requester";
import RecipeCard from "../recipeCard/RecipeCard";

export default function Catalog() {

    const [recipes, setRecipes] = useState<RecipeType[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const response = await requester("http://localhost:1337/catalog", "GET")
                const result: RecipeType[] = await response.json();

                setRecipes(result)
                console.log(result)
            } catch (error) {
                setError("An error occurred while executing the request!")
            }
        })()
    }, [])

    return (
        <section className="main">
            {recipes.length != 0
                ? <ul className="cards">
                    {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
                </ul>
                :
                <h1>No recipes</h1>}
        </section>

    );
}
