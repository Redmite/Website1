import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";
// images
import logo from "../images/logo.svg";
import inbox from "../images/inbox.svg";
import placeHolder from "../images/placeHolder.jpg";
import hispanicManSmiling from "../images/hispanicManSmiling.JPG";
import espanol from "../images/espanol.webp";
// import whatever line to get the data from the database
import BottomBar from "../Script/BottomBar.js";
// this will be where we initialize the data from the database, if we need to
var Description = (
  <div>
    I can teach conversational Spanish, I have experience teaching muitiple
    students
  </div>
);
var Title = <p>Juantarancon</p>;
function CreatorCategories(props) {

  if (props.category === "null") { 
    var category = "General";
  } else if (props.category === "commonCore") {
      var category = "Common Core";
  } else if (props.category === "websiteDesign") {
      var category = "Website Design";
  } else if (props.category === "Language") {
      var category = "Common Core";
  } else if (props.category === "onlineBusiness") {
      var category = "Online Business";
  } else if (props.category === "designing") {
      var category = "Designing";
  }
    // here we will pass back the catagory to database, and it will pass back all the 
    // sessions that are in that catagory
    return (
<div class="mainWrapper">
      <div class="topBar-LoggedIn">
        <div class="logo">
          <img src={logo} class="logoImg" alt="missing logo" />
        </div>
        <form class="topSearch" action="#news">
          <input
            type="text"
            placeholder="What skill do you want to learn?"
            class="searchBar"
          />
        </form>
        <div class="topBar-LoggedInRightSide">
          <li class="topBarCoach">
            <a href="/MentorInfoPage">Creator</a>
          </li>
          <li class="topBarOrders">
            <a href="#news">Orders</a>
          </li>
          <li class="topBarSchedule">
            <a>Schedule</a>
          </li>
          <li class="topBarInbox">
            <a href="#news">
              <img src={inbox} class="topBarInboximg"></img>
            </a>
          </li>
          <li class="topBarAccountProfile">
            <a href="#news">
              <img src={placeHolder} class="topBarAccountProfileImg"></img>
            </a>
          </li>
        </div>
      </div>
      <div class="mainContentLoggedIn">
        <div class="reccomendedMentorText">Reccomended Mentors</div>
        <div class="reccomendedMentorSession">
          <a class="reccomendedMentorSessionPanel" href="/PlaceholderSession">
            <div class="reccomendedMentorSessionPanel-topSection">
              <a>
                <img
                  class="reccomendedMentorSessionPanel-img"
                  src={espanol}
                ></img>
              </a>
            </div>
            <div class="reccomendedMentorSessionPanel-bottomSection">
              <div class="reccomendedMentorSessionPanel-titleCreatorContainer">
                <a class="reccomendedMentorSessionPanel-title">{Title}</a>
                <a class="reccomendedMentorSessionPanel-creatorImgContainer">
                  <img
                    class="reccomendedMentorSessionPanel-creatorImg"
                    src={hispanicManSmiling}
                  ></img>
                </a>
              </div>
              <div class="reccomendedMentorSessionPanel-Description">
                {Description} {/* this is where we will put the description */}
              </div>
            </div>
          </a>
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
        </div>
        <div class="reccomendedMentorSession">
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
        </div>
        <div class="reccomendedMentorSession">
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
          <li class="reccomendedMentorSessionPanel"></li>
        </div>
      </div>
      <BottomBar />
      <script></script>
    </div>
    );
}

export default CreatorCategories;