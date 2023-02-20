import Logo from "../assets/Logo.svg"
import Nav from "./Nav.js"

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo" />
            <Nav />
            <article>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </article>
            <article>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer;