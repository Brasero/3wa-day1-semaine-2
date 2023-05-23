import {useLocation, useNavigate} from 'react-router-dom'

function Detail() {

    const {state} = useLocation()
    const naviguate = useNavigate()

    const handleClick = () => {
        naviguate(-1)
    }

    return (
        <>
            <button onClick={handleClick} >Retour</button>
            <h1>{state.title}</h1>
            <div>
                <span>{state.description}</span>
                <span>{state.content}</span>
            </div>
        </>
    )
}

export default Detail