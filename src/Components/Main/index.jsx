import './Main.css'
import Cards from './Cards'
const devs = [{ id: 1, name: "Felipe Holanda", country: "Brasil", age: 22 }, { id: 2, name: "Matheus Broseghini", country: "Brasil", age: 24 }, { id: 3, name: "Raphael Souza", country: "Brasil", age: 26 }, { id: 4, name: "Lucas Holanda", country: "Poland", age: 24 }]

export default function Main() {
    return (
        <main>
            <h1>Colegas de trabalho:</h1>
            <div className="cards">
                {devs.map((element) => {
                    return <Cards key={element.id} name={element.name} country={element.country} age={element.age} />
                })}
            </div>
        </main>
    )
}