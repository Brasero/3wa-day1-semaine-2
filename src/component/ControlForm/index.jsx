import { useState } from "react";

function ControlForm() {
    //On définit l'état initial de notre champ
    const [value, setValue] = useState('')

    //Lors du changement de la valeur du champ, on appelle notre setter afin de modifier l'état
    const handleChange = (e) => {
        //On utilise "toUpperCase()" pour que la valeur soit en majuscule
        setValue(e.target.value.toUpperCase())
    }

    //On définit la constante servant à définir si oui ou non l'on doit afficher l'erreur
    //A chaque changement de state de value la valeur de la const Error sera réévaluer.
    const Error = value.includes('.')


    return (
        <form>
            {/* seul l'input qui nous intéresse est controlé, pour cet exemple nous ne gererons pas la soumission
             du formulaire */}
            <input type={'text'} value={value} onChange={handleChange} />
            {
                //Si Error vaut "true" alors on affiche notre message
                //Une notation plus courte est possible : Error && <span>Erreur</span>
                Error ? <span>Erreur</span> : null
            }
            <input type={'submit'} value={'submit'} />
        </form>
    )
}

export default ControlForm