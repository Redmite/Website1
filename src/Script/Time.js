import React from 'react'
import {useState} from 'react';

var sessionTime = "No Time Selected";

function Times(props) {

 const [info, setInfo] = useState(false); // this is the use state hook (look at react docs for more info)
 const [startTime, setStartTime] = useState('');
 const [endTime, setEndTime] = useState('');

// this is the event that is passed in when the button is clicked. it is the button itself. it is passed in as a parameter in the displayInfo function
 function submitInfo() {
  setInfo(true); // this sets the info (see line 30) to visible
  sessionTime = startTime + " to " + endTime + " " + props.date.toDateString(); // this gets sent to back end for processing and storage
}
// these functions occur whenever the value in a text box is changed, and change the original value of it to the new value
// for example, if the original value is 1:00, and the new value is 2:00, the original value will be changed to 2:00
const handleStart = event => {
  setStartTime(event.target.value);
  setInfo(false)
  // console.log('value is:', event.target.value);
};
const handleEnd = event => {
  setEndTime(event.target.value);
  setInfo(false)
  // console.log('value is:', event.target.value);
};

return (
 
 <div className="times">
    <div>
      <label for="startTime">When would you like to start your sessions?</label>
      <input type="text" placeholder='30 minute increments please' onChange={handleStart} value={startTime}/>
      <label for="startTime">When would you like to end your sessions?</label>
      <input type="text" placeholder='30 minute increments please' onChange={handleEnd} value={endTime} />
      <button onClick={()=> submitInfo()}>Enter Session </button> 
    </div>


    <div>
      {info ? `A session has been set from ${startTime} to ${endTime} ${props.date.toDateString()}` : null} 
    </div> 
 </div> // this is a ternary operator. if info is true, it will display the time and date. if not, it will display nothing
  ) // why is there a $ in front of the event and props.date.toDateString()? this is a template literal. it allows you to use variables in a string. look at the link below for more info
}
 
export default Times;


// {time.map(times => { // this is a map function that will loop through the array of times and display them
// return (
  //  {times => {
  //   return (    )}}