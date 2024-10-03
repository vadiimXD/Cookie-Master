import { Link } from "react-router-dom";
import { RecipeType } from "../../types/RecipeType";

export default function RecipeCard(props: any) {
    const recipe: RecipeType = props.recipe;

    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_image">
                    <Link to={`/details/${recipe._id}`}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVUhLpDCcuJyKZmMGQKf1_exwWMMEi_KyiQ&s"
                            alt="no img"
                        />
                    </Link>
                    <span className="card_likes">
                        <span>Харесвания</span>{recipe.likes.length}
                    </span>
                </div>
                <div className="card_content">
                    <h2 className="card_title">{recipe.name}</h2>
                    <div className="card_text">
                        <p>Време за готвене: {recipe.time} минути.</p>
                        <p>Калории: {recipe.calories} калории.</p>

                        <hr />
                        <p>{recipe.recipe}</p>
                    </div>
                </div>
            </div>
        </li>
    );
}
