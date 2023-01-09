import React from "react";
import CreatorCategories from "../Script/CreatorCategories";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

function LoggedInHomePage(props) {
  return (
    <div class="mainWrapper">
      <div class="topBar-LoggedIn">
        <div class="logo">
          <img src="logo.svg" class="logoImg" alt="missing logo" />
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
            <img src="inbox.svg" class="topBarInboximg"></img>
          </li>
          <li class="topBarAccountProfile">
            <a href="#news">
              <img src="placeHolder.jpg" class="topBarAccountProfileImg"></img>
            </a>
          </li>
        </div>
      </div>
        <CreatorCategories category={props.category}/>
      <div class="bottomBar"></div>
      <script></script>
    </div>
  );
}

export default LoggedInHomePage;
