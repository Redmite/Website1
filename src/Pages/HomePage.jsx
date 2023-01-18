import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/loggedOut/loginBox.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedOut/topBar.css";
import "../Css/bottomBar.css";

import SearchBar from "../Script/SearchBar";

// home page function, this is what we actually see

function HomePage() {
  return (
    <div class="mainWrapper">
      <div class="backgroundTopBar">
        <div class="topBar">
          <div class="topPanel">
            <div class="logo">
              <img
                src="{require('/images/image-name.png')}"
                class="logoImg"
                alt="missing logo"
              />
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
        <img src="GreetingPanelImg.svg" class="greetingPanelImg" />
      </div>

      <div class="popularServices">
        <div class="popularServiceText">Popular Services</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/commonCore">
              <img src="math.jpeg" class="popularCategoriesImg" />
              <div class="innerTextPopularCategories">Common Core</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="/SearchLoggedOutPage/websiteDesign">
              <img
                src="websiteDesign.jpeg"
                class="popularCategoriesImgWebsiteDesign"
              ></img>
              <div class="innerTextPopularCategories">Website Design</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/language">
              <img
                src="language.jpeg"
                class="popularCategoriesImgLanguage"
              ></img>
              <div class="innerTextPopularCategories">Language</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelSD">
            <a href="/SearchLoggedOutPage/onlineBusiness">
              <img
                src="onlineBusiness.jpeg"
                class="popularCategoriesImgOnlineBusiness"
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelLD">
            <a href="/SearchLoggedOutPage/designing">
              <img
                src="Illustrations.jpeg"
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
                src="onlineBusiness.jpeg"
                class="popularCategoriesImgOnlineBusiness"
              ></img>
              <div class="innerTextPopularCategories">Online Business</div>
            </a>
          </li>
          <li class="reccomendedCategoriesPanelMobile">
            <a href="/SearchLoggedOutPage/designing">
              <img
                src="Illustrations.jpeg"
                class="popularCategoriesImgIllustrationsMobile"
              ></img>
              <div class="innerTextPopularCategories">Designing</div>
            </a>
          </li>
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
    </div>
  );
}

export default HomePage;
