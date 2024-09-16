import "./Register.css"

export default function Register() {
    return (
        <section>
            <form>
                <div className="inp">
                    <label >email</label>
                    <input type="text"/>
                </div>
                <div className="inp">
                    <label htmlFor="">password</label>
                    <input type="text" />
                </div>
                <div className="inp">
                    <label htmlFor="">repassword</label>
                    <input type="text"/>
                </div>
                <button>Sumbit</button>
            </form>
        </section>
    );
}
