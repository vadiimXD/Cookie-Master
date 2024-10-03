import { useParams } from "react-router-dom";
import "./Details.css"
import { useEffect, useState } from "react";
import { RecipeType } from "../../types/RecipeType";
import requester from "../../utils/requester";

export default function Details() {
    const params = useParams();
    const [recipe, setRecipe] = useState<RecipeType>()
    const [error, setError] = useState("")
    useEffect(() => {
        (async () => {
            try {
                const response = await requester(`http://localhost:1337/details/${params.recipeId}`, "GET")
                const result: RecipeType = await response.json();
                console.log(result)
                setRecipe(result)
            } catch (error) {
                setError("An error occurred while executing the request!")
            }

        })()
    }, [])
    return (
        <section className="main">
            <ul className="details">
                <li className="details_item" id="item_salad">
                    <div className="details">
                        <div className="details_price">{recipe?.likes.length} харесвания</div>
                        <div className="details_image">
                            <img
                                src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                                alt="no img"
                            />
                        </div>
                        <div className="details_content">
                            <h2 className="details_title">{recipe?.name}</h2>
                            <div className="details_text">
                                <p>{recipe?.recipe}</p>
                            </div>
                        </div>
                    <div className="btns">
                        <button className="btn edit">Edit</button>
                        <button className="btn del">Delete</button>
                    </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}
