
function Users({users}) {

    return (
        <ul>
            {
                users.map((elem, key) => {
                    return <li key={key} >{elem}</li>
                })
            }
        </ul>
    )
}

export default Users