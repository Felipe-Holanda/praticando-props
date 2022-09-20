export default function Cards(props) {
    return (
        <div className="card">
            <h3>Dev: {props.name}</h3>
            <div className="cardContent">
                <p>Idade: {props.age}</p>
                <p>País: {props.country}</p>
            </div>
        </div>
    )
}