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
        <section>
            <form onSubmit={(e) => registerFormSubmitHandler(e, registerFormValues, context?.setState, navigate, setError)}>
                <div className="inp">
                    <label >email</label>
                    <input type="email" name="email" placeholder="vaddiimm@abv.bg" value={registerFormValues.email}
                        onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                </div>
                <div className="inp">
                    <label >password</label>
                    <input type="text" name="password" value={registerFormValues.password}
                        onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                </div>
                <div className="inp">
                    <label>repassword</label>
                    <input type="text" name="repassword" value={registerFormValues.repassword}
                        onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                </div>
                <button>Sumbit</button>
            </form>
        </section>
    );
}
