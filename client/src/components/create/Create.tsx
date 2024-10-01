import { useState } from "react";
import "./Create.css"
import { changeHandler, createFormSubmitHandler } from "../../utils/formUtils";

export default function Create() {

    const [createFormValues, setCreateFormValues] = useState({
        name: "",
        image: "",
        calories: "",
        time: "",
        recipe: ""
    })

    return (
        <section className="container forms">
            <div className="form create">
                <div className="form-content">
                    <h3>Добави рецепта</h3>
                    <form onSubmit={(e) => createFormSubmitHandler(e, createFormValues)}>
                        <div className="field input-field">
                            <span>Име на храната:</span>
                            <input type="text" placeholder="Пържени картофки" name="name" className="input" value={createFormValues.name}
                                onChange={(e) => changeHandler(e, setCreateFormValues)} />
                        </div>

                        <div className="field input-field">
                            <span>Снимка на храната:</span>
                            <input type="file" accept="image/*" name="image" className="input" value={createFormValues.image}
                                onChange={(e) => changeHandler(e, setCreateFormValues)} />
                        </div>

                        <div className="field input-field">
                            <span>Калорий на храната:</span>
                            <input type="number" placeholder="500" className="input" name="calories" value={createFormValues.calories}
                                onChange={(e) => changeHandler(e, setCreateFormValues)} />
                        </div>

                        <div className="field input-field">
                            <span>Време за приготвяне:</span>
                            <input type="text" placeholder="45 минути" className="input" name="time" value={createFormValues.time}
                                onChange={(e) => changeHandler(e, setCreateFormValues)} />
                        </div>

                        <div className="field input-field">
                            <span>Рецепта:</span>
                            <textarea className="input" id="" name="recipe" value={createFormValues.recipe}
                              placeholder="Картофи, сол, олио"  onChange={(e) => changeHandler(e, setCreateFormValues)}></textarea>
                        </div>
                        <div className="field input-field">

                        </div>
                        <div className="line" />

                        <div className="field button-field">
                            <button>Добави</button>
                        </div>

                    </form>

                </div>


            </div>
        </section>
    );
}
