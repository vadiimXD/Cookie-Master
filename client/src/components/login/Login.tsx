import "./Login.css"

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { changeHandler, loginFormSubmitHandler } from "../../utils/formUtils";

export default function Login() {

    const navigate = useNavigate()

    const context = useContext(AuthContext)


    const [error, setError] = useState(false)

    const [loginFormValues, setLoginFormValues] = useState({
        email: '',
        password: ''
    });


    return (
        <section className="container forms">
            <div className="form login">
                <div className="form-content">
                    <h3>Login</h3>
                    <form onSubmit={(e) => loginFormSubmitHandler(e, loginFormValues, context?.setState, navigate, setError)}>

                        <div className="field input-field">
                            <input type="email" placeholder="Email" name="email" className="input" value={loginFormValues.email}
                                onChange={(e) => changeHandler(e, setLoginFormValues)} />
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password" name="password" value={loginFormValues.password}
                                onChange={(e) => changeHandler(e, setLoginFormValues)} />
                            <i className="bx bx-hide eye-icon" />
                        </div>

                        <div className="form-link">
                            <a href="#" className="forgot-pass">
                                Forgot password?
                            </a>
                        </div>

                        <div className="field button-field">
                            <button>Login</button>
                        </div>

                    </form>
                    <div className="form-link">
                        <span>
                            <p>Don't have an account?</p>
                            <Link to={"/register"} className="link signup-link">
                                Signup
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="line" />
                
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" className="google-img" />
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="" className="google-img" />
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
        </section>

    );
}
