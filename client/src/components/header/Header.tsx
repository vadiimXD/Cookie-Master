import { Link } from "react-router-dom";

import "./Header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/register" className="button">Register</Link> </li>
                    <li> <Link to="/login" className="button">Login</Link> </li>

                </ul>
            </nav>
        </header >
    );
}
