import {useState, useEffect} from "react";
import SelectToMultiple from "../SelectToMultiple/index.jsx";

function MultipleList() {

    const [value, setValue] = useState(0)
    const [numbers, setNumbers] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {
        if(value !== 0) {
            let count = 1
            let number = []
            while (true) {

                const result = value*count

                if (value === 0 || result > 100) {
                    break;
                }

                number.push(result)
                count++
            }
            setNumbers(number)
        } else {
            setNumbers([])
        }
    }, [value])

    const selectMultiple = Array(20)

    return (
        <div>
            <select value={value} onChange={handleChange}>
                <option value={0}>Aucun</option>
                {
                    [...selectMultiple.keys()].map((elem) => {
                        return  <option key={elem} value={elem + 1}>{elem + 1}</option>
                    })
                }
            </select>

            {
                numbers.length > 0 && (<SelectToMultiple numbers={numbers} />)
            }
        </div>)
}

export default MultipleList