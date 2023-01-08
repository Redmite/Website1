import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/loggedOut/loginBox.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedOut/topBar.css";

import SearchBar from "../Script/SearchBar";

// home page function, this is what we actually see

function HomePage() {
  return (
    <div class="mainWrapper">
      <div class="backgroundTopBar">
        <div class="topBar">
          <div class="topPanel">
            <div class="logo">
              <img src="logo.svg" class="logoImg" alt="missing logo" />
            </div>
            <form class="topSearch" action="#news">
              <SearchBar placeholder="What skill do you want to learn?" class="searchBar" />
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
      </div>
      <div class="greetingPanel">
        <div class="greetingPanelSideTextBox">
          <h1 class="h1-greetingPanel">Seeking a mentor?</h1>
          <h2 class="h2-greetingPanel">
            Do you find it difficult to learn from a video or a website and
            would like to be taught by an expert?
          </h2>
          <button class="getStartedButton" href="/SignUpPage" id="join-button">
            Get Started
          </button>
        </div>
        <img src="1.svg" class="greetingPanelImg" />
      </div>

      <div class="popularServices">
        <div class="popularServiceText">Popular Services</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanelSD">
            <a href="#">
              <img src="math.jpeg" class="popularCategoriesImg" />
              <div class="innerTextPopularCategories">Common Core</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="#">
              <img
                src="websiteDesign.jpeg"
                class="popularCategoriesImgWebsiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Website Design</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="#">
              <img
                src="language.jpeg"
                class="popularCategoriesImgLanguage"
              ></img>
              <div class="innerTextPopularCategories">Language</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="#">
              <img
                src="onlineBusiness.jpeg"
                class="popularCategoriesImgOnlineBusiness"
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelLD">
            <a href="#">
              <img
                src="Illustrations.jpeg"
                class="popularCategoriesImgIllustrations"
              ></img>
              <div class="innerTextPopularCategories">Designing</div>
            </a>
          </li>
        </div>
      </div>
      <div class="bottomBar"></div>
    </div>
  );
}

export default HomePage;
