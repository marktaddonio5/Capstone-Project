import Salad from "../assets/greek salad.jpg"
/*
import Bruschetta from "../assets/bruschetta.svg"
import Dessert from "../assets/lemon dessert.svg"

const menuItems = [
    {
        imgSrc: {Salad},
        title: "Greek Salad",
        price: "$12",
        description: "A greek salad with fresh vegetables",
    },
    {
        imgSrc: {Bruschetta},
        title: "Bruschetta",
        price: "$10",
        description: "Fresh bruschetta",
    },
    {
        imgSrc: {Dessert},
        title: "Lemon Dessert",
        price: "$9",
        description: "A fresh lemon dessert",
    }
]

const Cards = menuItems.map(menuItems => {
    return (
        <card>
            <img src={menuItems.imgSrc} className="cardImage"></img>
            <h3>{menuItems.title}</h3>
            <h4>{menuItems.price}</h4>
            <p>{menuItems.description}</p>
        </card>
)})
    
*/
const Highlight = () => {
    return (
        <section className="section">
            <h1>This Week's Specials</h1>
            <button className="menuButton">Online Menu</button>
            <card>
                <img src={Salad} className="cardImage"></img>
                <h3>Greek Salad</h3>
                <h4>$12</h4>
                <p>A greek salad with fresh vegetables</p>
            </card>
            <card>
                <img src={Salad} className="cardImage"></img>
                <h3>Greek Salad</h3>
                <h4>$12</h4>
                <p>A greek salad with fresh vegetables</p>
            </card>
            <card>
                <img src={Salad} className="cardImage"></img>
                <h3>Greek Salad</h3>
                <h4>$12</h4>
                <p>A greek salad with fresh vegetables</p>
            </card>
           
        </section>
    )
}

export default Highlight