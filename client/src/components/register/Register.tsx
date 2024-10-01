import { useContext, useState } from "react";
import "./Register.css"
import { changeHandler, registerFormSubmitHandler } from "../../utils/formUtils";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
    const navigate = useNavigate()

    const context = useContext(AuthContext)


    const [error, setError] = useState(false)

    const [registerFormValues, setRegisterFormValues] = useState({
        email: '',
        password: '',
        repassword: "",
    });

    return (
        <section className="container forms">
            <div className="form login">
                <div className="form-content">
                    <h3>Регистрация</h3>
                    <form onSubmit={(e) => registerFormSubmitHandler(e, registerFormValues, context?.setState, navigate, setError)}>

                        <div className="field input-field">
                            <input type="email" placeholder="vadiim1bg@gmmail.com" name="email" className="input" value={registerFormValues.email}
                                onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="vadim1111" className="password" name="password" value={registerFormValues.password}
                                onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                            <i className="bx bx-hide eye-icon" />
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="vadim1111" className="password" name="repassword" value={registerFormValues.repassword}
                                onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                            <i className="bx bx-hide eye-icon" />
                        </div>


                        <div className="field button-field">
                            <button>Регистрация</button>
                        </div>

                    </form>
                    <div className="form-link">
                        <span>
                           <p>Имаш вече профил?</p>
                            <Link to="/login" className="link signup-link">
                                Влизане
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="line" />
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" className="google-img" />
                        <span>Регистрирай се със Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="" className="google-img" />
                        <span>Регистрирай се с Google</span>
                    </a>
                </div>
            </div>
        </section>

    );
}

