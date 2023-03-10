
import React, {useState} from "react";

const BookingFormContents = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccassion] = useState('');
    const [time, setTime] = useState();

    const timeOptions = availableTimes.map(times => {
     return (
        <option key={times}>{times}</option>
    )});

    const handleSubmit = (e) => {
        e.preventDefault();
        return submitForm(e.target.value)
    };

    const dateChange = (e) => {
        setDate(e.target.value);
        dispatch({type: "add", date: e.target.value});
    };
   

    return (
        <form className="bookingForm" onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose a Date</label>
            <input 
                type="date" 
                id="res-date" 
                data-testid="res-date"
                value={date}
                onChange={dateChange}
                required
                ></input>
            <label htmlFor="res-time">Choose a time</label>
            <select 
                data-testid="res-time"
                placeholder="00:00"
                id="res-time" 
                value={time}
                onChange={e => setTime(e.target.value)}>
                {timeOptions}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number"
                placeholder="1-10" 
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

const BookingPage = ({availableTimes, dispatch, submitForm}) => {
    return (
        <>
        <h2 className="booking">Book a table</h2>
        <div className="booking">
            <BookingFormContents 
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}  />
        </div>
        </>
    )
}

export default BookingPage;
