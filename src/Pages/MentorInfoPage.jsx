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
          <div class="form-element">
            <label for="Profile Name">Profile Name</label>
            <input type="text" id="Profession" placeholder="Enter Your profile name"/>
          </div>
          <div class="form-element">
            <label for="Profession">Profession</label>
            <input type="text" id="Profession" placeholder="Enter Your Profession"/>
          </div>
          <div class="form-element">
            <label for="Professional email">Professional email</label>
            <input type="email" id="Profession email" placeholder="Enter your professional email"/>
          </div>
          <div class="form-element">
            <label for="Websites">Enter your website URL</label>
            <input type="text" id="Websites" placeholder="Enter Website URL"/>
          </div>
          <div class="form-element">
            <label for="Social Media">Enter your social medias</label>
            <input type="text" id="Social Media" placeholder="Enter your professional email"/>
          </div>
          <div class="form-element">
            <label for="Languages">What languagues do you speak</label>
            <input type="text" id="Languages" placeholder="Enter what languages do you speak"/>
          </div>
          <div class="form-element">
            <label for="Basic Description">Description:</label>
            <input type="text" id="Basic Description" placeholder="Give a description of yourself"/>
          </div>
        </div>

        <div class="experienceForm">
          <h1>Experience</h1>
          <div class="form-element">
            <label for="Ocupation">Current Ocupation</label>
            <input type="text" id="Ocupation" placeholder="Enter your Current Ocupation"/>
          </div>
          <div class="form-element">
            <label for="PreviousOcupations">Past Experience</label>
            <input type="text" id="PreviousOcupations" placeholder="Enter your Previous Experience "/>
          </div>
          <div class="form-element">
            <label for="EducationLevel">How smart are you</label>
            <input type="text" id="EducationLevel" placeholder="high school/college diplomas"/>
          </div>
          <div class="form-element">
            <label for="Diplomas">Diplomas or Certifcations</label>
            <input type="text" id="Diplomas" placeholder="Enter your Diploma(s) or certifications"/>
          </div>
          <div class="form-element">
            <label for="Languages">Profession:</label>
            <input type="text" id="Languages" placeholder="Enter what languages do you speak"/>
          </div>
          <div class="form-element">
            <label for="Basic Description">Description:</label>
            <input type="text" id="Basic Description" placeholder="Give a description of yourself"/>
          </div>
        </div>

        <div class="PayTimeForm">
          <h1>Pay and Time</h1>
          <div class="form-element">
            <label for="Ocupation">Current Ocupation:</label>
            <input type="text" id="Ocupation" placeholder="Enter your Current Ocupation"/>
          </div>
          <div class="form-element">
            <label for="PreviousOcupations">Past Experience</label>
            <input type="text" id="PreviousOcupations" placeholder="Enter your Previous Experience "/>
          </div>
          <div class="form-element">
            <label for="EducationLevel">How smart are you</label>
            <input type="text" id="EducationLevel" placeholder="high school/college diplomas"/>
          </div>
          <div class="form-element">
            <label for="Languages">Profession:</label>
            <input type="text" id="Languages" placeholder="Enter what languages do you speak"/>
          </div>
          <div class="form-element">
            <label for="Basic Description">Description:</label>
            <input type="text" id="Basic Description" placeholder="Give a description of yourself"/>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default MentorInfoPage;