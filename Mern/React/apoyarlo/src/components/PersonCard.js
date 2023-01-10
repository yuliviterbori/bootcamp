

const PersonCard = ({name, age, color}) => {
    return (<div className="card">
        <h3>{name.last}, {name.first}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {color}</p>
    </div>)
}

export default PersonCard;