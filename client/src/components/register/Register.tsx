import { useContext, useState } from "react";
import "./Register.css"
import { changeHandler, registerFormSubmitHandler } from "../../utils/formUtils";
import { useNavigate } from "react-router-dom";
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
                    <header>Register</header>
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
                            <button>Register</button>
                        </div>

                    </form>
                    <div className="form-link">
                        <span>
                           <p>Already have account?</p>
                            <a href="#" className="link signup-link">
                                Login
                            </a>
                        </span>
                    </div>
                </div>
                <div className="line" />
                <div className="media-options">
                    <a href="#" className="field facebook">
                        <i className="bx bxl-facebook facebook-icon" />
                        <span>Register with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="images/google.png" alt="" className="google-img" />
                        <span>Register with Google</span>
                    </a>
                </div>
            </div>
        </section>

    );
}

