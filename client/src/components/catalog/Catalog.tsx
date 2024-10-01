import "./Catalog.css"

export default function Catalog() {
    return (
        <section className="main">
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVUhLpDCcuJyKZmMGQKf1_exwWMMEi_KyiQ&s"
                                alt="no img"
                            />
                            <span className="card_likes">
                                <span>likes</span>9
                            </span>
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">Farmstand Salad</h2>
                            <div className="card_text">
                                <p>
                                    Dig into the freshest veggies of the season! This salad-in-a-jar
                                    features a mixture of leafy greens and seasonal vegetables, fresh
                                    from the farmer's market.
                                </p>
                                <hr />
                                <p>
                                    Served with your choice of dressing on the side:
                                    <strong>housemade ranch</strong>,
                                    <strong>cherry balsamic vinaigrette</strong>
                                    <strong>creamy chipotle</strong>,
                                    <strong>avocado green goddess</strong>, or
                                    <strong>honey mustard</strong>. Add your choice of protein for $2
                                    more.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

    );
}
