
import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import About from "./About"
import useReducer from "react"
import React, {useState} from 'react'


const Main = () => {
    const [availableTimes, setAvailableTimes] = useState([
        {time: "17:00"},
        {time: "18:00"},
        {time: "19:00"},
        {time: "20:00"},
        {time: "21:00"},
        {time: "22:00"},
    ])

    return (
        <Routes>
            <Route 
                path="/" 
                element={<Homepage />}>
            </Route>
            <Route 
                path="/booking" 
                element={<BookingPage availableTimes={availableTimes} />}
            >
            </Route>
            <Route 
                path="/about" 
                element={<div className="container"><About /></div>}></Route>
        </Routes>  
    )
};

export default Main;