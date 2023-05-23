import { NavLink } from 'react-router-dom'

function Nav() {

    const style = ({ isActive }) => {
        return {
            padding: '5px',
            color: isActive ? 'red' : ''
        }
    }

    return (
        <nav>
            <NavLink to={'/'} style={style} >Acceuil</NavLink>
            <NavLink to={'/home'} state={{from: 'textarea'}}  style={style} end>Home</NavLink>
            <NavLink to={'/text'} style={style}>TextArea</NavLink>
            <NavLink to={'/exemple/2'} style={style}>Exemple 2</NavLink>
        </nav>
    )
}

export default Nav;