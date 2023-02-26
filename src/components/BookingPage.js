import BookingForm from "./BookingForm";
import React, {useState} from "react";


const BookingPage = ({availableTimes}) => {
    const BookingFormContents = () => {
        const [date, setDate] = useState();
        const [guests, setGuests] = useState(2);
        const [occasion, setOccassion] = useState();
        const [time, setTime] = useState();

        const timeOptions = availableTimes.map(times => {
         return (
             <option>{times.time}</option>
        )})

        const handleSubmit = (e) => {
             e.preventDefault();
         }

         return (
             <form className="bookingForm" onSubmit={handleSubmit}>
                 <label for="res-date">Choose a Date</label>
                 <input 
                     type="date" 
                     id="res-date" 
                     value={date}
                     onChange={e => setDate(e.target.value)}
                     ></input>
                 <label for="res-time">Choose a time</label>
                 <select 
                     id="res-time" 
                     value={time}
                     onChange={e => setTime(e.target.value)}>
                     {timeOptions}
                 </select>
                 <label for="guests">Number of guests</label>
                 <input 
                     type="number"
                     placeholder="1" 
                     min="1" 
                     max="10" 
                     id="guests"
                     value={guests}
                     onChange={e => setGuests(e.target.value)}></input>
                 <label for="occasion">Occasion</label>
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

    const BookingForm = () => {
       return (
       <BookingFormContents />
    )}

    return (
        <>
        <h2 className="booking">Book a table</h2>
        <div className="booking">
            <BookingForm availableTimes={availableTimes} />
        </div>
        </>
    )
}

export default BookingPage;