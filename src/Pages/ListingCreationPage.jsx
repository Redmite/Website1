import {useState} from 'react';
import React from "react";
import Calendar from 'react-calendar'; 
import "../Css/loggedIn/listingCreation.css";
import Time from '../Script/Time.js';

import "../Css/loggedIn/listingCreation.css";

function ListingCreationPage() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 

  return (
    <div class="mainWrapper">
      <div class="container">
        <div class="form">
          <div class="profilePic">
            <div class="profilePicInfo">
              <label for="profilePic">Insert a Picture of yourself here!</label>
              <input type="file" id="ProfilePic" name="Profile Picture"/>
            </div>
          </div>
          <div class="experienceQualifications">
            <h3>Name</h3>
            <input type="text" placeholder="What experience do you have relating to this listing"/>
            <input type="text" placeholder="What certifications or diplomas do you have relating to this listing"/>
            <input type="text" placeholder="Give a fun fact about yourself or the job listing"/>
            <input type="text" placeholder="Knowledge or material prerequisetes before your session "/>
          </div>
          <div class="details">
            <input type="text" placeholder="What do you offer and what they will learn"/>
            <input type="text" placeholder="Why should they choose you over others"/>
          </div>
          <div class="projectPic">
          <p>Project they've worked on</p>
          <input type="file" id="ProjectPic" name="Project Picture"/>
          </div>
          <h1 className='header'>Dates Avalible</h1>
          <div>
            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
          </div>

          {date.length > 0 ? (
          <p>
            <span>Start:</span>
            {date[0].toDateString()}
            &nbsp;
            &nbsp;
            <span>End:</span>{date[1].toDateString()}
          </p>
          ) : (
          <p>
            <span>Today is: </span>{date.toDateString()}
          </p> 
          )
          }
          <Time showTime={showTime} date={date}/>
        </div>
      </div>       
    </div>
  );
}

export default ListingCreationPage;

// to custom style the calendar

// Navigate to node_modules/react-calendar/dist.
// Copy the code in the stylesheet into listingCreation.css.
// Remove import 'react-calendar/dist/Calendar.css' from App.js.
// You can now edit the code according to your taste.