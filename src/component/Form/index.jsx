import { useState } from "react";
import Users from "../Users/index.jsx";
import Input from "../Input/index.jsx";

function Form () {
    //Gestion d'un state multiple, ici "user" contient un objet contenant 3 propriétés.
    //Elles seront accessibles en utilisant la notation "user.prenom" si l'on souhaite accéder au prénom
    const [user, setUser] = useState({prenom: 'azer', nom: 'nom', age: null})
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState('')

    //Chaque objet du tableau suivant représente des infos à passer à nos Inputs
    //Chacun d'entre eux devra avoir la même structure
    //Il est possible qu'un ou plusieurs objets présente des propriétés supplémentaires par rapport aux autres,
    //Au quel cas il sera necessaire de prévoir des conditions afin de traiter ces infos si elles sont présentes.
    const formInfo = [
        {
            type: 'text',
            name: 'prenom'
        },
        {
            type: 'text',
            name: 'nom'
        },
        {
            type: 'number',
            name: 'age'
        }
    ]

    const handleChange = (e) => {
        //On déstructure l'objet "e.target" afin de récupérer ses propriétés "value" et "name".
        const {value, name} = e.target

        //Dans le cas ou le "name" de l'input vaut age on appliquera un traitement différent à la valeur d'entré.
        if (name === 'age') {
            setUser({...user, [name]: parseInt(value)})
            setMessage('')
            console.log(user)
            return
        }

        setUser({...user, [name]: value.trim()})
        setMessage('')

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.trim() === "") {
            setMessage("Merci de saisir un nom");
            return
        }

        if (users.includes(user)) {
            setUser('')
            setMessage(`Le nom ${user} existe déjà`)
            return
        }


        const values = [...users]
        values.push(user)
        setUsers(values)
    }

    return (
        <form onSubmit={handleSubmit}>
            {message && <span>{message}</span>}

            {
                formInfo.map((elem, key) => {
                   return (
                       <Input key={key} name={elem.name} type={elem.type} value={user[elem.name]} onChange={handleChange}/>
                   )
                })
            }

            <input type={'submit'} value={"enregistrer"} />
            {
                users.length > 0 && <Users users={users} />
            }
        </form>
    )
}

export default Form