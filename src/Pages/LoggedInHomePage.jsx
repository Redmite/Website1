import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

function CreatorCategories(props) {
  { if (props.category === "null") {
    return (
      <div class="mainContentLoggedIn">
        <div> Reccomended Categories</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
        </div>
        <div> Reccomended Coaching Sessions</div>
        <div class="reccomendedCoachSession">
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
        </div>
        <div> Reccomended Creators</div>
        <div class="reccomendedCreators">
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
        </div>
      </div>
    );
  } else {
    return (
      <div class="mainContentLoggedIn">
    
        <div> Reccomended {props.category}</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
        </div>
        <div> Reccomended Coaching Sessions</div>
        <div class="reccomendedCoachSession">
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
          <li class="reccomendedCoachSessionPanel"></li>
        </div>
        <div> Reccomended Creators</div>
        <div class="reccomendedCreators">
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
          <li class="reccomendedCreatorsPanel"></li>
        </div>
      </div>
    );
  }};
}


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
