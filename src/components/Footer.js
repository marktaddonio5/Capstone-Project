import Logo from "../assets/Logo.svg"


const Footer = () => {
    return (
        <footer className="section">
            <img src={Logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Reservations">Reservations</a></li>
                    <li><a href="#OrderOnline">Order Online</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
            </nav>
            <article>
                <h3>Contact</h3>
                <p>1234 Doe Street<br></br>
                Chicago, Illinois<br></br>
                880-999-9999</p>
            </article>
            <article>
                <h3>Social Media Links</h3>
                <a href="#">Facebook</a><br></br>
                <a href="#">Instagram</a>
            </article>
           
        </footer>
    )
}

export default Footer;