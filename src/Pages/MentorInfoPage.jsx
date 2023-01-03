import React from "react";

import "../Css/loggedIn/mentorInfo.css";

// this is still heavily in development



// working on function to streamline this as there is a lot of repetitiveness
function Textf(props) {
  return (           
  <div class="form-element">
    <label for={props.id}>{props.info}</label>
    <input type="text" id={props.id} placeholder={props.enter}/>
  </div>
  );
}

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


function MentorInfoPage() {
  return (
  <>
    <div class="mentorPageWrapper">
      <div class="container">
        <div class="testContainer">
          <div class="basicInfoForm" id="basic">
            <h2>Basic Info</h2>
            <Textf info="Profile Name" id="Profile Name" enter="" />
            <Textf info="Profession" id="Profession" enter="" />
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
            <Textf info="How Smart Are you" id="Education Level" enter="" />
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