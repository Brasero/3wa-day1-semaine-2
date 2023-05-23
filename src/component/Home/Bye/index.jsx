import {useOutletContext} from "react-router-dom";
import {useEffect} from "react";


function Bye () {

    const context = useOutletContext()

    useEffect(() => {
        console.log(context)
    }, [])

    return <h1>Bye</h1>
}

export default Bye