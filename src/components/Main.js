import Hero from "../components/Hero"
import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import About from "./About"


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/about" element={
                <div className="container">
                    <About />
                </div>
            }></Route>
        </Routes>  
    )
}

export default Main;