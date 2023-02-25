import Logo from "../assets/Logo.svg"
import Nav from "./Nav"


const Header =  () => {
return (
    <div className="container">
        <header className="section">
            <img src={Logo} alt="Logo"></img>
            <Nav />
        </header>
    </div>
)
}

export default Header;