import "./Login.css"

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
                    <header>Login</header>
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
                            <a href="#" className="link signup-link">
                                Signup
                            </a>
                        </span>
                    </div>
                </div>
                <div className="line" />
                <div className="media-options">
                    <a href="#" className="field facebook">
                        <i className="bx bxl-facebook facebook-icon" />
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="images/google.png" alt="" className="google-img" />
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
        </section>

    );
}
