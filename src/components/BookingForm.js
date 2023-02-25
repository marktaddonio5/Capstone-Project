
const BookingFormContents = () => {
   return (
        <form className="bookingForm">
            <label for="res-date">Choose a Date</label>
            <input type="date" id="res-date"></input>
            <label for="res-time">Choose a time</label>
            <select id="res-time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
            <label for="occasion">Occasion</label>
            <select id="occasion">
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
)
}
export default BookingForm