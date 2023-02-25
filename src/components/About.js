import Chef from "../assets/restaurantChefB.jpg"

const About = () => {
    return (
        <section className="sectionGrid">
            <article className="aboutText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </article>
            <img className="chef" src={Chef} alt="Picture of the Chef"></img>
        </section>
    )
}

export default About;