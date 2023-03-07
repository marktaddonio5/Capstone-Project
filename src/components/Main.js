
import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import About from "./About"
import {useReducer} from "react"
import React, {useState} from 'react'

const reducer = (availableTimes, action) => {
    if (action) return [...availableTimes, {time: "14:00"}];
   
}

const initialTimes = [
    {time: "17:00"},
    {time: "18:00"},
    {time: "19:00"},
    {time: "20:00"},
    {time: "21:00"},
    {time: "22:00"},
];


const Main = () => {
    const [availableTimes, dispatch] = useReducer(reducer, initialTimes);
    
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Homepage />}>
            </Route>
            <Route 
                path="/booking" 
                element={<BookingPage availableTimes={availableTimes}
                dispatch={dispatch} />}
            >
            </Route>
            <Route 
                path="/about" 
                element={<div className="container"><About /></div>}></Route>
        </Routes>  
    )
};

export default Main;