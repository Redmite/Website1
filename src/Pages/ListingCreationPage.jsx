import {useState} from 'react';
import React from "react";
import Calendar from 'react-calendar'; 
import "../Css/loggedIn/listingCreation.css";
import Time from '../Script/Time.js';

import "../Css/loggedIn/listingCreation.css";

function ListingCreationPage() {
  // variables for calanders
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 

  // variables for inputs
  const [profilePic, setProfilePic] = useState();
  const [experience, setExperience] = useState();
  const [certifications, setCertifications] = useState();
  const [funFact, setFunFact] = useState();
  const [Prequisetes, setPrequisetes] = useState();
  const [learnMaterial, setLearnMaterial] = useState();
  const [choose, setChoose] = useState();
  const [projectPic, setProjectPic] = useState();
    // when backend gets the data, this will be set up to where inside the use state parenthesis,
    // will be the data from the data base

  // list for submitting
  var info = [];

  // functions for inputs
  const handleProfilePic = event => {
    setProfilePic(event.target.value);
  };
  const handleExperience = event => {
    setExperience(event.target.value);
  };
  const handleCertifications = event => {
    setCertifications(event.target.value);
  };
  const handleFunFact = event => {
    setFunFact(event.target.value);
  };
  const handlePrequisetes = event => {
    setPrequisetes(event.target.value);
  };
  const handleLearnMaterial = event => {
    setLearnMaterial(event.target.value);
  };
  const handleChoose = event => {
    setChoose(event.target.value);
  };
  const handleProjectPic = event => {
    setProjectPic(event.target.value);
  };
  // this function will submit all the data to the database
  const submitInfo = () => {
    info = [profilePic, experience, certifications, funFact, Prequisetes, learnMaterial, choose, projectPic]
    // some line to submit it to the database
    // maybe a return boolean
    // if true, then redirect to the logged in page
    // if false then display an error message
  };
  return (
    <div class="mainWrapper">
      <div class="container">
        <div class="form">
          <div class="profilePic">
            <div class="profilePicInfo">
              <label for="profilePic">Insert a Picture of yourself here!</label>
              <input type="file" id="ProfilePic" name="Profile Picture" onChange={handleProfilePic} value={profilePic}/>
            </div>
          </div>
          <div class="experienceQualifications">
            <h3>Name</h3>
            <input type="text" placeholder="What experience do you have relating to this listing" onChange={handleExperience} value={experience}/>
            <input type="text" placeholder="What certifications or diplomas do you have relating to this listing" onChange={handleCertifications} value={certifications}/>
            <input type="text" placeholder="Give a fun fact about yourself or the job listing" onChange={handleFunFact} value={funFact}/>
            <input type="text" placeholder="Knowledge or material prerequisetes before your session " onChange={handlePrequisetes} value={Prequisetes}/>
          </div>
          <div class="details">
            <input type="text" placeholder="What do you offer and what they will learn" onChange={handleLearnMaterial} value={learnMaterial}/>
            <input type="text" placeholder="Why should they choose you over others" onChange={handleChoose} value={choose}/>
          </div>
          <div class="projectPic">
          <p>Project they've worked on</p>
          <input type="file" id="ProjectPic" name="Project Picture" onChange={handleProjectPic} value={projectPic}/>
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

          <button onClick={submitInfo}>Save</button>
          <button onClick="/placeholderForListingPage">See your listing</button>
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