
/* Exemple d'un formulaire non controlé */
function UncontrolForm() {

    //Est à appeler lors de l'event onSubmit
    const handleSubmit = (e) => {
        //afin d'accéder à la valeur de notre input il faudra l'appeler au travers de son "id"
        console.log(e.target['my_input'].value)
        e.preventDefault() /* À faire obligatoirement lors de soumission de formulaire pour eviter
        le rafraichissement de la page */
    }

    const handleChange = (e) => {
        //On récupère la valeur au traver du target de l'event
        let value = e.target.value

        //On change la valeur en majuscule uniquement
        e.target.value = e.target.value.toUpperCase()

        //On vérifie si la valeur contient un "."
        if(value.includes('.')) {
            //Si oui on insère un message d'erreur dans le span dédié
            document.querySelector('#error').innerHTML = 'Error'
        } else {
            //Sinon on vide le span
            document.querySelector('#error').innerHTML = ''
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'} onChange={handleChange}  id={'my_input'} />
            {/* Ci-dessous le span destiné à recevoir un message d'erreur */}
            <span id={'error'}></span>
            <input type={'submit'} value={'Submit'} />
        </form>
    )
}

export default UncontrolForm;