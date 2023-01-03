import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/loggedOut/loginBox.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedOut/topBar.css";

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
              <input
                type="text"
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
              <li class="displayLd">
                <a
                  href="#news"
                  class="WIP will be done much later makes no sense rn"
                ></a>
              </li>
              <li class="displaySd">
                <a href="/LoggedInHomePage" class="topBarOptionsLoggedOut">
                  Language C
                </a>
              </li>
              <li class="displaySd">
                <a href="/SignInPage">
                  <button class="signIn" id="show-login">
                    Sign In B
                  </button>
                </a>
              </li>
              <li class="displaySd">
                <a href="/SignUpPage" id="join-button">
                  Join
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="greetingPanel"></div>

      <div class="popularServices">
        <div class="popularServiceText">Popular Services</div>
        <div class="reccomendedCategories">
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
          <li class="reccomendedCategoriesPanel"></li>
        </div>
      </div>
      <div class="bottomBar"></div>
    </div>
  );
}

export default HomePage;
