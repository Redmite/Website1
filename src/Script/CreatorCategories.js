import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedOut/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";
// images
import hispanicManSmiling from "../Images/hispanicManSmiling.JPG";
import espanol from "../Images/espanol.webp";
import ratings from "../Images/FakeRatings.JPG"
// import whatever line to get the data from the database
import BottomBar from "../jshooks/UseBottomBar.js";
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

      <div class="mainContentLoggedIn">
        <div class="reccomendedMentorText">Language -</div>
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
            <div class="reccomendedMentorSessionPanel-paymentMethods">
              <img src={ratings}>
              </img>
              <a href="/SignUpPage" id="join-button" class="bookButton">
                  Book
                </a>
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