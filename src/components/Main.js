
import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import About from "./About"
import {useReducer} from "react"
import React, {useState} from 'react'

const reducer = (state, action) => {
    if (action === 'date_changed') return [...state]
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
    const [state, dispatch] = useReducer(reducer, initialTimes);
    
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Homepage />}>
            </Route>
            <Route 
                path="/booking" 
                element={<BookingPage state={state} />}
            >
            </Route>
            <Route 
                path="/about" 
                element={<div className="container"><About /></div>}></Route>
        </Routes>  
    )
};

export default Main;