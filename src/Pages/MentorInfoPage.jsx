import React from "react";
import {useState} from 'react';

import "../Css/loggedIn/mentorInfo.css";

// working on function to streamline this as there is a lot of repetitiveness
function Textf(props) {
  return (           
  <div class="form-element">
    <label for={props.id}>{props.info}</label>
    <input type="text" id={props.id} placeholder={props.enter} onChange={props.func} value={props.value} />
  </div>
  );
}

function MentorInfoPage() {

// input variables
  const [profileName, setProfileName] = useState();
  const [profession, setProfession] = useState();
  const [professionalEmail, setProfessionalEmail] = useState();
  const [website, setWebsite] = useState();
  const [socialMedias, setSocialMedias] = useState();
  const [languages, setLanguages] = useState();
  const [description, setDescription] = useState();
  const [field, setField] = useState();
  const [ocupation, setOcupation] = useState();
  const [experience, setExperience] = useState();
  const [educationLevel, setEducationLevel] = useState();
  const [diplomas, setDiplomas] = useState();
  const [hourlyRate, setHourlyRate] = useState();
  const [creditInfo, setCreditInfo] = useState();
  // variable to submit to database
  var info = [];

// functions to handle input
  function handleProfileName(event) {
    setProfileName(event.target.value);
  }
  function handleProfession(event) {
    setProfession(event.target.value);
  }
  function handleProfessionalEmail(event) {
    setProfessionalEmail(event.target.value);
  }
  function handleWebsite(event) {
    setWebsite(event.target.value);
  }
  function handleSocialMedias(event) {
    setSocialMedias(event.target.value);
  }
  function handleLanguages(event) {
    setLanguages(event.target.value);
  }
  function handleDescription(event) {
    setDescription(event.target.value);
  }
  function handleField(event) {
    setField(event.target.value);
  }
  function handleOcupation(event) {
    setOcupation(event.target.value);
  }
  function handleExperience(event) {
    setExperience(event.target.value);
  }
  function handleEducationLevel(event) {
    setEducationLevel(event.target.value);
  }
  function handleDiplomas(event) {
    setDiplomas(event.target.value);
  }
  function handleHourlyRate(event) {
    setHourlyRate(event.target.value);
  }
  function handleCreditInfo(event) {
    setCreditInfo(event.target.value);
  }
  const submitInfo = () => {
    info = [profileName, profession, professionalEmail, website, socialMedias, languages, description, field, ocupation, experience, educationLevel, diplomas, hourlyRate, creditInfo];
    // some line to submit it to the database
    // maybe a return boolean
    // if true, then redirect to the logged in page
    // if false then display an error message
  };

  return (
  <>
    <div class="mentorPageWrapper">
      <div class="container">
        <div class="testContainer">
          <div class="basicInfoForm" id="basic">
            <h2>Basic Info</h2>
            <Textf info="Profile Name" id="Profile Name" enter="" function="handleProfileName" value="profileName" />
            <Textf info="Profession" id="Profession" enter="" function="handleProfileName" value="profileName" />
            <Textf info="Professional Email" id="Professional Email" enter="" />
            <Textf info="Your Website Url" id="Website" enter="" />
            <Textf info="Social Medias" id="Social Medias" enter="" />
            <Textf info="Languages" id="Languages" enter="" />
            <Textf info="Description" id="Description" enter="" />
          </div>

          <div class="experienceForm">
            <h2>Experience</h2>
            <Textf info="Field of Work" id="Field" enter="" />
            <Textf info="Current Ocupation" id="Ocupation" enter="" />
            <Textf info="Past Experience" id="Experience" enter="" />
            <Textf info="How smart are you" id="Education Level" enter="" />
            <Textf info="Diplomas or Certifications" id="Diplomas" enter="" />
          </div>

          <div class="payForm">
            <h2>Pay and Time</h2>
            <Textf info="Your Hourly Rate" id="HourlyRate" enter="" />
            <Textf info="credit info" id="Field" enter="" />
            <Textf info="rest of this is placeholder for payment method" id="Field" enter="" />
            <Textf info="Field of Work" id="Field" enter="" />
            <Textf info="Field of Work" id="Field" enter="" />
            <input type="submit" value="Continue?"/>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default MentorInfoPage;


// these functions are a work in progress

// function SwitchPages(props) {
//   var nextForm = props.to
//   document.getElementsByClassName("basicInfoForm experienceForm payForm").style.opacity = "1";
//   document.getElementById({nextForm}).style.opacity = "1";
// }
// function SubButton(props) {
//   return (           
//   <div class="form-element">
//     <button onClick={() => SwitchPages(to = props.back)}>Back</button>
//     <button onClick={() => SwitchPages(to = props.next)}>Next</button>    
//   </div>
//   );
// }