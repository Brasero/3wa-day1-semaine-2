import { useParams } from "react-router-dom";


function Exemple() {

    const {id} = useParams()

    return <h1>Exemple {id}</h1>
}

export default Exemple