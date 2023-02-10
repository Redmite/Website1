import React, { useState, useEffect } from "react";
import { getSessions } from "./backendAPI";
import axios from "axios";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

// images
import logo from "../Images/logo.svg";
import inbox from "../Images/inbox.svg";
import placeHolder from "../Images/placeHolder.jpg";
import hispanicManSmiling from "../Images/hispanicManSmiling.JPG";
import espanol from "../Images/espanol.webp";
import ratings from "../Images/FakeRatings.JPG";
// import whatever line to get the data from the database
import BottomBar from "../Script/BottomBar";
import SessionTemplate from "../Script/creatorSessionTemplate";

// this will be where we initialize the data from the database, if we need to
var Description = (
  <div>
    I can teach conversational Spanish, I have experience teaching muitiple
    students
  </div>
);
var Title = <p>Juantarancon</p>;
var Picture = <img src={placeHolder}></img>;

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
          {function MainContentLoggedIn() {
            const [sessions, setSessions] = useState([]);

            useEffect(() => {
              // fetch sessions data from backend and store it in the state
              axios
                .get("/api/sessions")
                .then((res) => setSessions(res.data))
                .catch((error) => console.error(error));
            }, []);

            return (
              <div class="reccomendedMentorSessions">
                {sessions.map((session, index) => (
                  <SessionTemplate
                    key={session.id}
                    sessionImg={session.sessionImg}
                    creatorProfileImg={session.creatorProfileImg}
                  />
                ))}
              </div>
            );
          }}
        </div>
      </div>
      <BottomBar />
      <script></script>
    </div>
  );
}

export default LoggedInHomePage;

{
  /*<a class="reccomendedMentorSessionPanel" href="/PlaceholderSession">
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
                {Description} {/* this is where we will put the description
                </div>
                </div>
                <div class="reccomendedMentorSessionPanel-paymentMethods">
                  <img src={ratings}></img>
                  <a href="/SignUpPage" id="join-button" class="bookButton">
                    Book
                  </a>
                </div>
              </a>
            */
}
