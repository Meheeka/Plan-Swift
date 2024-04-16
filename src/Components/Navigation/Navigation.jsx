import "./Navigation.css"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/ find-events'>Find Events</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;

