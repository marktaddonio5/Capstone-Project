import Salad from "../assets/greek salad.jpg"
import Lemon from "../assets/lemon dessert.jpg"
import Bru from "../assets/bruchetta.svg"


const menuItems = [
    {
        imgSrc: require("../assets/greek salad.jpg"),
        title: "Greek Salad",
        price: "$12",
        description: "A greek salad with fresh vegetables",
    },
    {
        imgSrc: require("../assets/greek salad.jpg"),
        title: "Bruschetta",
        price: "$10",
        description: "Fresh bruschetta",
    },
    {
        imgSrc: require("../assets/lemon dessert.jpg"),
        title: "Lemon Cake",
        price: "$9",
        description: "A fresh lemon dessert",
    },
]

const cards = menuItems.map(menuItems => {
    return (
        <card className="cardHighlight" key={menuItems.title}>
            <img src={menuItems.imgSrc} className="cardImage"></img>
            <h3>{menuItems.title}</h3>
            <h4>{menuItems.price}</h4>
            <p>{menuItems.description}</p>
        </card>
)})
    


const Highlight = () => {
    return (
        <section className="highlights">
            <h1 className="HLh1">Weekly Specials</h1>
            <button className="menuButton">Online Menu</button>
            <div className="section">
            {cards}
            </div>
        </section>
    )
}

export default Highlight
