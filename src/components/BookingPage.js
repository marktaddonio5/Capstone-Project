
import React, {useState, useEffect} from "react";

const BookingFormContents = ({availableTimes, dispatch}) => {
    const [date, setDate] = useState();
    const [guests, setGuests] = useState(2);
    const [occasion, setOccassion] = useState('');
    const [time, setTime] = useState('');

    const timeOptions = availableTimes.map(times => {
     return (
        <option key={times.time}>{times.time}</option>
    )});

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const DateChange = (e) => {
        setDate(e.target.value);
        dispatch({});
    };
   

    return (
        <form className="bookingForm" onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose a Date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date}
                onChange={DateChange}></input>
            <label htmlFor="res-time">Choose a time</label>
            <h3>{date}</h3>
            <select 
                id="res-time" 
                value={time}
                onChange={e => setTime(e.target.value)}>
                {timeOptions}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number"
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests"
                value={guests}
                onChange={e => setGuests(e.target.value)}></input>
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion}
                onChange={e => setOccassion(e.target.value)}
            >
                <option>N/A</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your reservation"></input>
        </form>
    )
};


const BookingPage = ({availableTimes, dispatch}) => {
    return (
        <>
        <h2 className="booking">Book a table</h2>
        <div className="booking">
            <BookingFormContents availableTimes={availableTimes} dispatch={dispatch} />
        </div>
        </>
    )
}

export default BookingPage;