import React from 'react'
import {useState} from 'react';

const time = ['08:00','09:00','10:00','14:00','15:00'] // this is the array of times that will be displayed

function Times(props) {

 const [event, setEvent] = useState(null) // this is the use state hook (look at react docs for more info)
 const [info, setInfo] = useState(false)

// this is the event that is passed in when the button is clicked. it is the button itself. it is passed in as a parameter in the displayInfo function
 function displayInfo(e) {
   setInfo(true); // this sets the info (see line 29) to visible
   setEvent(e.target.innerText); // this 
}

return (
 
 <div className="times">
   {time.map(times => { // this is a map function that will loop through the array of times and display them
    return (
    <div>
      <label for="startTime">When would you like to start your sessions?</label>
      <input type="text" placeholder='please enter only times that end with :30 or :00' />
      <button onClick={(e)=> displayInfo(e)}>  {times} </button> 
    </div>// when the button is clicked, it will call the display function and pass itself. it will then display the time for that button
        )
     })} // what is the ${event} int he statement below
    <div>
      {info ? `Your session is set to ${event} ${props.date.toDateString()}` : null} 
    </div> 
 </div> // this is a ternary operator. if info is true, it will display the time and date. if not, it will display nothing
  )
}
 
export default Times;