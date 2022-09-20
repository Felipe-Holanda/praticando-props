import './Header.css'

export default function Header() {
    return (
        <header>
            <h1>Funcionários Cadastrados</h1>
            <nav>
                <ul>
                    <li>Início</li>
                    <li
                        className="active"
                    >
                        Funcionários
                    </li>
                </ul>
            </nav>
        </header>
    )
}