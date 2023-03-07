import Chef from "../assets/restaurantChefB.jpg"

const Hero = () => {
    return (
        <section className="hero">
            <article className="heroText">
                <h1 data-test-id="Little Lemon">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorum ipsum dolor sit amet</p>
                <button href="#ReserveTable">Reserve a Table</button>
            </article>
            <img className="chef" src={Chef} alt="Picture of the Chef"></img>
        </section>
    )
}

export default Hero