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
                    <li> <Link to="/" className="button">Home</Link> </li>
                    <li> <Link to="/search" className="button">Search</Link> </li>
                    <li> <Link to="/catalog" className="button">Catalog</Link> </li>
                    {isLogged
                        ?
                        <>
                            <li> <Link to="/create" className="button">Create</Link> </li>
                            <li> <Link to="/profile" className="button">Profile</Link> </li>
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


                </ul>
            </nav>
        </header >
    );
}
