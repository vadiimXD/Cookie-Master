import "./Home.css"

export default function Home() {
    return (
        <section>
            <div className="recently-added decoration">
                <h2>Скоро добавени</h2>
                <p>в процес..</p>
            </div>
            <div className="main-content">
                <h1>Добре дошли в "Cookie Master"</h1>
                <p> The place where you will find all the recipes for the most delicious dishes</p>
            </div>

            <div className="most-liked decoration">
                <h2>Най-харесвани</h2>
                <p>в процес..</p>
            </div>
        </section>
    );
}
