import "./Header.css"

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const isLogged = localStorage.getItem("auth");
    console.log(context)
    console.log(isLogged, "log info")

    return (
        <header>
            <nav>
                <ul>
                    {isLogged
                        ?
                        <>
                            <li> <a className="button" onClick={() => {
                                context?.setState(false)
                                localStorage.clear()
                                navigate("/login")
                            }}>Logout</a> </li>
                        </>
                        :
                        <>
                            <li> <Link to="/register" className="button">Register</Link> </li>
                            <li> <Link to="/login" className="button">Login</Link> </li>
                        </>}
                    <li> <Link to="/" className="button">Home</Link> </li>


                </ul>
            </nav>
        </header >
    );
}
