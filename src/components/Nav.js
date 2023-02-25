import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav classname="section">
            <ul className="nav leadText">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#Menu">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#OrderOnline">Order Online</a></li>
                <li><a href="#Login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;