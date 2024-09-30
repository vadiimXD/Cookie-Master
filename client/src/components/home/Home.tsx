import "./Home.css"

export default function Home() {
    return (
        <section>
            <div className="recently-added decoration">
                <h2>recently added</h2>
            </div>
            <div className="main-content">
                <h1>Welcome to Cookie Master</h1>
                <p> The place where you will find all the recipes for the most delicious dishes</p>
            </div>

            <div className="most-liked decoration">
                <h2>most liked recipes</h2>
            </div>
        </section>
    );
}
