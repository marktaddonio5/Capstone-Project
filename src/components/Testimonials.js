
const testimonials = [
    {
        rating: "4 Stars",
        imgSrc: require("../assets/greek salad.jpg"),
        name: "Mark",
        reviewText: "It was really good"
    },
    {
        rating: "4 Stars",
        imgSrc: require("../assets/greek salad.jpg"),
        name: "Andrew",
        reviewText: "It was really good",
    },
    {
        rating: "4 Stars",
        imgSrc: require("../assets/greek salad.jpg"),
        name: "Susan",
        reviewText: "It was really good",
    },
    {
        rating: "4 Stars",
        imgSrc: require("../assets/greek salad.jpg"),
        name: "Katie",
        reviewText: "It was really good",
    },
]

const testimonialCards = testimonials.map(testimonials =>{
    return (
        <article className="cardTestimonial" key={testimonials.name}>
            <p>{testimonials.rating}</p>
            <img className="testimonialImg" src={testimonials.imgSrc}></img>
            <p>{testimonials.name}</p>
            <p>{testimonials.reviewText}</p>
        </article>
    )
})

const Testimonials = () => {
    return (
        <section className="section green white">
            {testimonialCards}
        </section>
    )
}

export default Testimonials;