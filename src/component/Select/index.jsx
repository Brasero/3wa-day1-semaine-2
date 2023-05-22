import { useState } from "react";

//En React le control des selects different légèrement de ce que l'on peut faire pour un input
function Select () {

    //Dans le cas d'un select multiple le state par default devra être un tableau de string
    const [value,setValue] = useState(['demo3', 'demo2'])

    const handleChange = (e) => {
        //Lors de la selection d'une option il faudra récupérer la propriété "selectedOptions" de "target"
        //Cette propriété contenant une Collection il sera necessary d'en faire un tableau afin de pouvoir le manipuler.
        //Array.from() nous permettra de le faire, il ne restera plus qu'à mapper sur le tableau pour récupérer
        //la value de chaque element
        setValue(Array.from(e.target.selectedOptions).map(elem => elem.value))
    }

    return (
        <div>
            <div>{JSON.stringify(value)}</div>
            {/* select prend le state en tant que value et la methode qui permet de modifier ce state
              * Seront selectionnées par default les valeurs contenues dans le state initial
              */}
            <select multiple value={value} onChange={handleChange}>
                <option value={'demo'}>Demo</option>
                <option value={'demo2'}>Demo2</option>
                <option value={'demo3'}>Demo3</option>
            </select>
        </div>
    )
}

export default Select