import { useState } from "react";
import React from "react";
import Calendar from "react-calendar";
import "../Css/loggedIn/listingCreation.css";
import Time from "../Script/Time.js";
import { Checkbox } from "../Script/GeneralFunctions.js";

import SearchBar from "../Script/SearchBar";

import "../Css/loggedIn/listingCreation.css";

function ListingCreationPage() {
  // variables for calanders
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  // variables for inputs
  const [profilePic, setProfilePic] = useState();
  const [experience, setExperience] = useState();
  const [certifications, setCertifications] = useState();
  const [funFact, setFunFact] = useState();
  const [Prerequisites, setPrerequisites] = useState();
  const [commonCore, setCommonCore] = useState();
  const [websiteDesign, setWebsiteDesign] = useState();
  const [language, setLanguage] = useState();
  const [onlineBusiness, setOnlineBusiness] = useState();
  const [designing, setDesigning] = useState();
  const [learnMaterial, setLearnMaterial] = useState();
  const [choose, setChoose] = useState();
  const [projectPic, setProjectPic] = useState();
  // when backend gets the data, this will be set up to where inside the use state parenthesis,
  // will be the data from the data base

  var info = [];

  // whenever a user changes a text box, these function will edit the variables associated with that box
  const handleProfilePic = (event) => {
    setProfilePic(event.target.value);
  };
  const handleExperience = (event) => {
    setExperience(event.target.value);
  };
  const handleCertifications = (event) => {
    setCertifications(event.target.value);
  };
  const handleFunFact = (event) => {
    setFunFact(event.target.value);
  };
  const handlePrerequisites = (event) => {
    setPrerequisites(event.target.value);
  };
  //these function will handle the checkboxes
  const handleCommonCore = (e) => {
    const checked = e.target.checked;
    checked ? setCommonCore(true) : setCommonCore(false);
  };
  const handleWebsiteDesign = (e) => {
    const checked = e.target.checked;
    checked ? setWebsiteDesign(true) : setWebsiteDesign(false);
  };
  const handleLanguage = (e) => {
    const checked = e.target.checked;
    checked ? setLanguage(true) : setLanguage(false);
  };
  const handleOnlineBusiness = (e) => {
    const checked = e.target.checked;
    checked ? setOnlineBusiness(true) : setOnlineBusiness(false);
  };
  const handleDesigning = (e) => {
    const checked = e.target.checked;
    checked ? setDesigning(true) : setDesigning(false);
  };
  //the rest of these are for text boxes
  const handleLearnMaterial = (event) => {
    setLearnMaterial(event.target.value);
  };
  const handleChoose = (event) => {
    setChoose(event.target.value);
  };
  const handleProjectPic = (event) => {
    setProjectPic(event.target.value);
  };
  // this function will submit all the data to the database
  const submitInfo = () => {
    info = [
      profilePic,
      experience,
      certifications,
      funFact,
      Prerequisites,
      learnMaterial,
      choose,
      projectPic,
      commonCore,
      websiteDesign,
      language,
      onlineBusiness,
      designing,
    ];
    // some line to submit it to the database
    // maybe a return boolean if it all checks out
    // if true, then redirect to the logged in page
    // if false then display an error message
  };
  return (
    <div class="mainWrapper">
      <div class="topBar">
        <div class="topPanel">
          <div class="logo">
            <img src="logo.svg" class="logoImg" alt="missing logo" />
          </div>
          <form class="topSearch" action="#news">
            <SearchBar
              placeholder="What skill do you want to learn?"
              class="searchBar"
            />
          </form>
          <div class="topOptionsRightSide">
            <li class="displayMd">
              <a href="#news" class="topBarOptionsLoggedOut">
                Become a Mentor
              </a>
            </li>
            <li class="displaySd">
              <a href="/LoggedInHomePage" class="topBarOptionsLoggedOut">
                Language
              </a>
            </li>
            <li class="displaySd">
              <a href="/SignInPage" class="signIn" id="show-login">
                Sign in
              </a>
            </li>
            <li class="displaySd">
              <a href="/SignUpPage" id="join-button" class="joinButton">
                Join
              </a>
            </li>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="form">
          <div class="profilePic">
            <div class="profilePicInfo">
              <label for="profilePic">Insert a Picture of yourself here!</label>
              <input
                type="file"
                id="ProfilePic"
                name="Profile Picture"
                onChange={handleProfilePic}
                value={profilePic}
              />
            </div>
          </div>
          <div class="experienceQualifications">
            <h3>Title</h3>
            <div class="titleArea">
              <h1>
                Your title is the most important place to include keywords that
                customers are likely to search for while looking for a session.
              </h1>
              <textarea
                type="text"
                placeholder="Title"
                onChange={handleExperience}
                value={experience}
                class="titleTextBox"
              />
            </div>

            {/* if you want more info on the checkbox function check GeneralFunctions in Script */}
            <Checkbox
              name="CommonCore"
              label="Common Core"
              value={commonCore}
              onChange={handleCommonCore}
            />
            <Checkbox
              name="WebsiteDesign"
              label="Website Design"
              value={websiteDesign}
              onChange={handleWebsiteDesign}
            />
            <Checkbox
              name="Language"
              label="Language"
              value={language}
              onChange={handleLanguage}
            />
            <Checkbox
              name="OnlineBusiness"
              label="Online Business"
              value={onlineBusiness}
              onChange={handleOnlineBusiness}
            />
            <Checkbox
              name="Designing"
              label="Designing"
              value={designing}
              onChange={handleDesigning}
            />
          </div>
          <div class="descirptionArea">
            <input
              type="text"
              placeholder="What do you offer and what they will learn"
              onChange={handleLearnMaterial}
              value={learnMaterial}
            />
          </div>
          <div class="projectPic">
            <p>Project they've worked on</p>
            <input
              type="file"
              id="ProjectPic"
              name="Project Picture"
              onChange={handleProjectPic}
              value={projectPic}
            />
          </div>
          <h1 className="header">Dates Avalible</h1>
          <div>
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={() => setShowTime(true)}
            />
          </div>

          {date.length > 0 ? (
            <p>
              <span>Start:</span>
              {date[0].toDateString()}
              &nbsp; &nbsp;
              <span>End:</span>
              {date[1].toDateString()}
            </p>
          ) : (
            <p>
              <span>Today is: </span>
              {date.toDateString()}
            </p>
          )}
          <Time showTime={showTime} date={date} />

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
