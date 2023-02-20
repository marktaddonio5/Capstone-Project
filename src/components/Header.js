import Logo from "../assets/Logo.svg"
import Nav from "./Nav"


const Header =  () => {
return (
    <header>
        <img src={Logo} alt="Logo"></img>
        <Nav />
    </header>
)
}

export default Header;