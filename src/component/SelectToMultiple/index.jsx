

function SelectToMultiple({numbers}) {
    return (
        <ul>
            {numbers.map((num) => <li key={num}>{num}</li>)}
        </ul>
    )
}

export default SelectToMultiple;