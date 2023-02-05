import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

// images
import logo from "../Images/logo.svg";
import inbox from "../Images/inbox.svg";
import placeHolder from "../Images/placeHolder.jpg";
// import whatever line to get the data from the database

// this will be where we initialize the data from the database, if we need to
var Description = (
  <div>
    This IS A DESCIRPTION This IS A DESCIRPTION This IS A DESCIRPTION This IS A
    DESCIRPTION This IS A DESCIRPTION This IS A DESCIRPTION This IS A
    DESCIRPTION This IS A DESCIRPTION This IS A DESCIRPTION This IS A
    DESCIRPTION This IS A DESCIRPTION This IS A DESCIRPTION This IS A
    DESCIRPTION This IS A DESCIRPTION This IS A DESCIRPTION This IS A
    DESCIRPTION This IS A DESCIRPTION This IS A DESCIRPTION This IS A
    DESCIRPTION
  </div>
);
var Title = <p>title</p>;
var Picture = <img src="placeHolder.jpg"></img>;

function LoggedInHomePage() {
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
          <li class="reccomendedMentorSessionPanel">
            <div class="reccomendedMentorSessionPanel-topSection">
              <a>
                <img class="reccomendedMentorSessionPanel-img" src=""></img>
              </a>
            </div>
            <div class="reccomendedMentorSessionPanel-bottomSection">
              <div class="reccomendedMentorSessionPanel-titleCreatorContainer">
                <a class="reccomendedMentorSessionPanel-title">{Title}</a>
                <a class="reccomendedMentorSessionPanel-creatorImgContainer">
                  <img
                    class="reccomendedMentorSessionPanel-creatorImg"
                    src={Picture}
                  ></img>
                </a>
              </div>
              <div class="reccomendedMentorSessionPanel-Description">
                {Description} {/* this is where we will put the description */}
              </div>
            </div>
          </li>
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
      <div class="bottomBar">
        <div class="bottomBarFlexContainer">
          <div class="bottomBarContentContainer">
            <li>
              <a>Privacy Policy</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a>Terms of Service</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a>Help & Support</a>
            </li>
          </div>
          <div class="bottomBarContentContainer">
            <li>
              <a>Contact Us</a>
            </li>
          </div>
        </div>
        <div class="followUsText">
          <center>Follow Us</center>
        </div>
        <div class="socialMediaContainer">
          <li class="socialMediaButtons">
            <a>
              <img src="tiktok.svg" class="socialMediaButtonImg"></img>
            </a>
          </li>
          <li class="socialMediaButtons">
            <a>
              <img src="twitter.svg" class="socialMediaButtonImgTwitter"></img>
            </a>
          </li>
          <li class="socialMediaButtonInstagram">
            <a>
              <img src="Instagram.svg" class="socialMediaButtonImgInsta"></img>
            </a>
          </li>
        </div>
      </div>
      <script></script>
    </div>
  );
}

export default LoggedInHomePage;
