import Header from "./Header.js"
import Footer from "./Footer"
import Hero from "./Hero.js"
import Highlight from "./Highlights"
import Testimonials from "./Testimonials"
import About from "./About"

const Homepage = () => {
    return (
    <div className="container">
      <Hero />
      <Highlight />
      <Testimonials />
      <About />
      <Footer />
    </div>
    )
}

export default Homepage;