import { useState } from "react";
//Un textarea en React peut être controlé exactement de la même manière qu'un input[type="text"]
function TextArea() {

    const [value, setValue] = useState('ma valeur')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form>
            <textarea value={value} onChange={handleChange}></textarea>
        </form>
    )
}

 export default TextArea