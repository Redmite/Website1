import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedOut/topBar.css";
import "../Css/bottomBar.css";
import "../Css/searchedContent.css";

// images
import logo from "../images/logo.svg";
import GreetingPanelImg from "../images/GreetingPanelImg.svg";
import math from "../images/math.jpeg";
import onlineBusiness from "../images/onlineBusiness.jpeg";
// import peopleCleaningHouse from "../images/PeopleCleaningHouse.jpeg";
import language from "../images/language.jpeg";
import websiteDesign from "../images/websiteDesign.jpeg";
import illustrations from "../images/Illustrations.jpeg";
import searchBarImg from "../images/SearchBar.svg";

// component imports
import SearchBar from "../Script/SearchBar";
import BottomBar from "../Script/BottomBar";

// home page function, this is what we actually see

function HomePage() {
  return (
    <div class="mainWrapper">
      <div class="backgroundTopBar">
        <div class="topBar">
          <div class="topPanel">
            <div class="logo">
              <img src={logo} class="logoImg" alt="missing logo" />
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
              <li class="displayMd">
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
      </div>
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
        <img src={GreetingPanelImg} class="greetingPanelImg" />
      </div>

      <div class="popularServices">
        <div class="popularServiceText">Popular Services</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/commonCore">
              <img src={math} class="popularCategoriesImg" />
              <div class="innerTextPopularCategories">Common Core</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="/SearchLoggedOutPage/websiteDesign">
              <img
                src={websiteDesign}
                class="popularCategoriesImgWebsiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Website Design</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/language">
              <img src={language} class="popularCategoriesImgLanguage"></img>
              <div class="innerTextPopularCategories">Language</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="/SearchLoggedOutPage/onlineBusiness">
              <img
                src={onlineBusiness}
                class="popularCategoriesImgOnlineBusiness"
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelLD">
            <a href="/SearchLoggedOutPage/designing">
              <img
                src={illustrations}
                class="popularCategoriesImgIllustrations"
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
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/designing">
              <img
                src={websiteDesign}
                class="popularCategoriesImgWebsiteDesignMobile"
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
