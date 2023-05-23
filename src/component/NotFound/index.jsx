import { useNavigate } from "react-router-dom";
import {useEffect} from "react";


function NotFound() {

    const naviguate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            naviguate('/', {
                replace: true
            })
        }, 1000)
    }, [])

    return <h1>Il n'y a rien içi</h1>
}

export default NotFound