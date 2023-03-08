import Chef from "../assets/restaurantChefB.jpg"
import {Routes, Router} from 'react-router-dom'
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <section className="hero">
            <article className="heroText">
                <h1 className="yellow">Little Lemon</h1>
                <h2 className="white">Chicago</h2>
                <p className="white">Lorum ipsum dolor sit amet</p>
                <Link to="/booking"><button data-test-id="Reservations">Reserve a Table</button></Link>
                
            </article>
            <img className="chef" src={Chef} alt="Picture of the Chef"></img>
        </section>
    )
}

export default Hero