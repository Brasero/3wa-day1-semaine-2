import { useState } from "react";

//Comme le select le cas du checkbox est particulier outre les props qui seront quasiment les mêmes que pour un input[type="text"]
// la modification de son état (state) diffère légèrement
function CheckBox() {

    const [value, setValue] = useState(false)

    const handleChange = (e) => {
        //Comme dit plus haut la modification du state diffère
        //Au lieu de chercher à récupérer "e.target.value" on prendra plutôt "e.target.checked"
        setValue(e.target.checked)
    }

    return (
        <form>
            {/* L'input prendra en props "checked" au lieu de "value" */}
            <input type={"checkbox"} checked={value} onChange={handleChange} />
        </form>
    )
}

export default CheckBox;