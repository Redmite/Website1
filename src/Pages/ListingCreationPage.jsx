import React from "react";

// imports

function ListingCreationPage() {
  return (
    <div class="mainWrapper">
      <div class="container">
        <div class="form">
          <div class="profilePic">
            <label for="profilePic">Insert a Picture of yourself here!</label>
            <input type="file" id="ProfilePic" name="Profile Picture"/>
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
          
        </div>
      </div>       
    </div>
  );
}

export default ListingCreationPage;