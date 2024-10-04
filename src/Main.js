import i from './restauranfood.jpg'
import React, {useState , useReducer, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import BookingPage from './BookingPage';


const Main = () => {

    
 const updateTimes = () => {
    setAvailableTimes()
 } 

 const initializeTimes  = () => {

 }



const [availableTimes , setAvailableTimes] = useReducer(updateTimes , initializeTimes)


 useEffect(() => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
 .then((response) => response.json()) 
 .then((fetchData) => initializeTimes(fetchData.fetchAPI)) 
 .catch((error) => console.log(error))
}, [])

const submitForm  = (formData) => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
    .then((response) => response.json()) 
    .then((fetchData) => initializeTimes(fetchData.submitAPI (formData))) 
    .catch((error) => console.log(error))


 }
    return (
        <>
        <main className='main'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>we are fanily owned ,edoisd restaurant</p>
            
            <button className='cdx'>Reeserve a table<Link to='/BookingPage' ></Link></button>
            <img className='aszas' width={240}  src={i}></img>
        </main>

        <Routes>
        <Route path="/BookingPage" element={<BookingPage/>}></Route>
       
        
        </Routes>


        
        

        </>
    )
}


export default Main;