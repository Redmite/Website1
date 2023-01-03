import React from "react";

// this is still heavily in development

// imports

// working on function to streamline this as there is a lot of repetitiveness
function Textf(props) {
  return (           
  <div class="form-element">
    <label for={props.id}>{props.info}</label>
    <input type="text" id={props.id} placeholder={props.enter}/>
  </div>
  );
}

function MentorInfoPage() {
  return (
  <>
    <Textf info="profession" id="Profession" enter="enter your profession here" />
    <h1>Test line while CSS is getting set-up</h1>
    <div class="mentorPageWrapper">
      <div class="container">
        <div class="basicInfoForm">
          <h1>Basic Info</h1>
          <Textf info="Profile Name" id="Profile Name" enter="" />
          <Textf info="Profession" id="Profession" enter="" />
          <Textf info="Professional Email" id="Professional Email" enter="" />
          <Textf info="Your Website Url" id="Website" enter="" />
          <Textf info="Social Medias" id="Social Medias" enter="" />
          <Textf info="Languages" id="Languages" enter="" />
          <Textf info="Description" id="Description" enter="" />
        </div>

        <div class="experienceForm">
          <h1>Experience</h1>
          <Textf info="Field of Work" id="Field" enter="" />
          <Textf info="Current Ocupation" id="Ocupation" enter="" />
          <Textf info="Past Experience" id="Experience" enter="" />
          <Textf info="How Smart Are you" id="Education Level" enter="" />
          <Textf info="Diplomas or Certifications" id="Diplomas" enter="" />
        </div>

        <div class="PayForm">
          <h1>Pay and Time</h1>
          <Textf info="Your Hourly Rate" id="HourlyRate" enter="" />
          <Textf info="credit info" id="Field" enter="" />
          <Textf info="rest of this is placeholder for payment method" id="Field" enter="" />
          <Textf info="Field of Work" id="Field" enter="" />
          <Textf info="Field of Work" id="Field" enter="" />
        </div>
      </div>
    </div>
  </>
  );
}

export default MentorInfoPage;