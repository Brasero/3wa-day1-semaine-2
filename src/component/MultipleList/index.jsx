import {useState, useEffect} from "react";
import SelectToMultiple from "../SelectToMultiple/index.jsx";

function MultipleList() {

    const [value, setValue] = useState(0)
    const [numbers, setNumbers] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    //fonction de callback effectuée lorsque la valeur de "value" change
    useEffect(() => {
        //Si "value" est différent de 0
        if(value != 0) {
            //Multiplicateur
            let count = 1
            //Tableau de multiple
            let multiple = []

            //Tant que le résultat est inférieur à 100
            while (true) {
                //On multiplie la valeur par le multiplicateur
                const result = value*count

                //Si le résultat est supérieur à 100 on sort de la boucle
                if (result > 100) {
                    break;
                }

                //On ajoute le résultat au tableau de multiple
                multiple.push(result)
                //On incrémente le multiplicateur
                count++
            }

            //On met à jour le state "numbers" avec le tableau de multiple
            setNumbers(multiple)
        } else {
            //Si "value" est égal à 0 on met à jour le state "numbers" avec un tableau vide
            setNumbers([])
        }
    }, [value])

    //On crée un tableau de 20 éléments afin de pouvoir créer un select avec 20 options
    //On utilise l'objet Array pour créer un tableau de 20 éléments vide (Array(20))
    //On utilise ensuite la méthode "keys()" pour récupérer les index de chaque élément du tableau
    //On utilise ensuite la méthode "spread" ([...]) afin de transformer l'objet "keys()" en tableau.
    const selectMultiple = [...Array(20).keys()]

    return (
        <div>
            <select value={value} onChange={handleChange}>
                <option value={0}>Aucun</option>
                {
                    //On map sur le tableau de 20 éléments afin de créer 20 options
                    selectMultiple.map((elem) => {
                        return  <option key={elem} value={elem + 1}>{elem + 1}</option>
                    })
                }
            </select>

            {
                //Si le tableau de multiple contient au moins un élément on affiche le composant "SelectToMultiple"
                numbers.length > 0 && (<SelectToMultiple numbers={numbers} />)
            }
        </div>)
}

export default MultipleList