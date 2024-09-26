import { LoginType } from "../types/LoginType";
import { RegisterType } from "../types/RegisterType";
import requester from "./requester";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


async function registerFormSubmitHandler(e: any, values: RegisterType, setState: any, navigate: Function, setError: Function) {
    e.preventDefault()
    if (!values.email || !values.password || !values.repassword) return setError("Empty fields")

    if (!emailRegex.test(values.email)) return setError("Invalid Email")


    if (values.password.length < 3) return setError("Minimum password length is 3!")

    if (values.password != values.repassword) return setError("Passwords do not match!")

    if (values.password.length < 3) return setError("Minimum re-password length is 3!")

    try {

        const response = await requester("http://localhost:1337/register", "POST", true, { email: values.email, password: values.password, repassword: values.repassword })

        const result = await response.json()
        setState(result)
        localStorage.setItem("auth", JSON.stringify(result))
        console.log(result, "result")
        navigate("/")
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

async function loginFormSubmitHandler(e: any, values: LoginType, setState: any, navigate: Function, setError: Function) {
    e.preventDefault();

    if (!values.email || !values.password) return setError("Empty fields")

    if (!emailRegex.test(values.email)) return setError("Invalid Email")

    if (values.password.length < 3) return setError("Minimum password length is 3!")

    try {
        const response = await requester("http://localhost:1337/login", "POST", true, { email: values.email, password: values.password })

        const result: any = await response.json()
        setState(result)
        localStorage.setItem("auth", JSON.stringify(result))
        console.log(result)
        navigate("/")
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

function changeHandler(e: any, setFormValues: any) {
    console.log(e.target.name, " name")
    console.log(e.target.value, " value")
    setFormValues((oldValues: any) => ({
        ...oldValues,
        [e.target.name]: e.target.value,
    }));
};

export {
    registerFormSubmitHandler,
    loginFormSubmitHandler,
    changeHandler
}