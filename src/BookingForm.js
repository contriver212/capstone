import { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom'
import ConfirmedBooking from "./ConfirmedBooking";


const BookingForm = (props) => {
   const [date, setDate] = useState("");
   const [guest, setGuest] = useState("");
  

   const handleSubmit = (e) => {
      e.preventDefault();
      setDate('');
      console.log('form submitted!');
   }

    return (
        <>
        <form onSubmit={handleSubmit} style="display: grid; max-width: 200px; gap: 20px">
   <label htmlFor="res-date">Choose date</label>
   <input type="date" value={date} onChange={(e) => setDate(e.target.value)} id="res-date"/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time ">
      {props.updateTimes.map((time, index) => (
         <option key={index}>{time}</option>
      ))}
      
     
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" min='1' required value={guest} onChange={(e) => setGuest(e.target.value)}  placeholder="1"  max="10" id="guests"/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <Link to='/Confirmation' >
   <input disabled={!date} type="submit" onSubmit={props.submitForm} value="Make Your reservation"/>
   </Link>

   <Routes>
        <Route path="/Confirmation" element={<ConfirmedBooking/>}></Route>
       
        
        </Routes>
</form>
        </>
        
    )
}


export default BookingForm;