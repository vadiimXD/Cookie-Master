import "./Details.css"

export default function Details() {
    return (
        <div className="main">
            <ul className="details">
                <li className="details_item" id="item_salad">
                    <div className="details">
                        <div className="details_price">$9</div>
                        <div className="details_image">
                            <img
                                src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                                alt="mixed vegetable salad in a mason jar. "
                            />
                        </div>
                        <div className="details_content">
                            <h2 className="details_title">Farmstand Salad</h2>
                            <div className="details_text">
                                <p>
                                    Dig into the freshest veggies of the season! This salad-in-a-jar
                                    features a mixture of leafy greens and seasonal vegetables, fresh
                                    from the farmer's market.
                                </p>
                                <p>
                                    Served with your choice of dressing on the side: housemade ranch,
                                    cherry balsamic vinaigrette, creamy chipotle, avocado green
                                    goddess, or honey mustard. Add your choice of protein for $2 more.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
