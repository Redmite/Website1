import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedOut/topBar.css";
import "../Css/bottomBar.css";
import "../Css/searchedContent.css";

// images
import GreetingPanelImg from "../Images/GreetingPanelImg.svg";
import math from "../Images/math.jpeg";
import onlineBusiness from "../Images/onlineBusiness.jpeg";
// import peopleCleaningHouse from "../Images/PeopleCleaningHouse.jpeg";
import language from "../Images/language.jpeg";
import websiteDesign from "../Images/websiteDesign.jpeg";
import illustrations from "../Images/Illustrations.jpeg";

// component imports
import SearchBar from "../JSHooks/UseSearchBar.js";
import BottomBar from "../HtmlHooks/UseBottomBar.js";
import UseTopBarLoggedOut from "../HtmlHooks/UseTopBarLoggedOut.js";

// home page function, this is what we actually see

function HomePage() {
  return (
    <div class="mainWrapper">
      <UseTopBarLoggedOut />
      <div class="greetingPanel">
        <div class="greetingPanelSideTextBox">
          <h1 class="h1-greetingPanel">Seeking a mentor?</h1>

          <h2 class="h2-greetingPanel">
            Do you find it difficult to learn from a video or a website and
            would like to be taught by an expert?
          </h2>
          <h2 class="h2-greetingPanelMobile">Find qualified Mentors now!</h2>
          <form class="topSearchMobile" action="#news">
            <SearchBar
              placeholder="What skill do you want to learn?"
              class="searchBarMobile"
            />
          </form>
          <button class="getStartedButton" href="/SignUpPage" id="join-button">
            Get Started
          </button>
        </div>
        <img src={GreetingPanelImg} class="greetingPanelImg" alt="Greeting" />
      </div>

      <div class="popularServices">
        <div class="popularServiceText">Popular Services</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/commonCore">
              <img
                src={math}
                class="popularCategoriesImg"
                alt="websiteDesign"
              />
              <div class="innerTextPopularCategories">Common Core</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="/SearchLoggedOutPage/websiteDesign">
              <img
                src={websiteDesign}
                class="popularCategoriesImgWebsiteDesign"
                alt="websiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Website Design</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/language">
              <img
                src={language}
                class="popularCategoriesImgLanguage"
                alt="websiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Language</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="/SearchLoggedOutPage/onlineBusiness">
              <img
                src={onlineBusiness}
                class="popularCategoriesImgOnlineBusiness"
                alt="websiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelLD">
            <a href="/SearchLoggedOutPage/designing">
              <img
                src={illustrations}
                class="popularCategoriesImgIllustrations"
                alt="websiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Designing</div>
            </a>
          </li>
        </div>
        <div class="mobileRow">
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/onlineBusiness">
              <img
                src={onlineBusiness}
                class="popularCategoriesImgOnlineBusiness"
                alt="websiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/designing">
              <img
                src={websiteDesign}
                class="popularCategoriesImgWebsiteDesignMobile"
                alt="websiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Website Design</div>
            </a>
          </li>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default HomePage;
