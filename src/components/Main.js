
import {Routes, Route, useNavigate} from "react-router-dom"
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"
import About from "./About"
import {useReducer} from "react"
import { useEffect } from 'react'
import BookingConfirmation from "./BookingConfirmation"
import { useState } from "react"

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

const d = new Date();

const initialTimes = fetchAPI(d)

const setAvailableTimes = (availableTimes, action) => {
    if (action.type === "add") return (
        fetchAPI(new Date(action.date))
    )
    if (action.type === "clear" ) return initialTimes;
}

const Main = () => {
    const [availableTimes, dispatch] = useReducer(setAvailableTimes, initialTimes);

    const navigate = useNavigate()

    function submitForm(data) {
        if (submitAPI(data) === true) navigate('/bookingConfirmed')
        
    }

    return (
        <Routes>
            <Route 
                path="/" 
                element={<Homepage />}>
            </Route>
            <Route 
                path="/booking" 
                element={<BookingPage availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm} />}
            >
            </Route>
            <Route
                path="/bookingConfirmed"
                element ={<BookingConfirmation/>}>
            </Route>
            <Route 
                path="/about" 
                element={<div className="container"><About /></div>}></Route>
        </Routes> 
    )
};

export default Main;