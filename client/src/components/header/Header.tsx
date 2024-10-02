import "./Header.css"

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const isLogged = localStorage.getItem("auth");

    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/" className="button">Начало</Link> </li>
                    <li> <Link to="/search" className="button">Търсене</Link> </li>
                    <li> <Link to="/catalog" className="button">Каталог</Link> </li>
                    {isLogged
                        ?
                        <>
                            <li> <Link to="/create" className="button">Създай</Link> </li>
                            <li> <Link to="/profile" className="button">Профил</Link> </li>
                            <li> <a className="button" onClick={() => {
                                context?.setState(false)
                                localStorage.clear()
                                navigate("/login")
                            }}>Излизане</a> </li>

                        </>
                        :
                        <>
                            <li> <Link to="/register" className="button">Регистрация</Link> </li>
                            <li> <Link to="/login" className="button">Влизане</Link> </li>
                        </>}


                </ul>
            </nav>
        </header >
    );
}
