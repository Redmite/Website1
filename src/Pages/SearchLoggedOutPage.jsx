import React from "react";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";

// home page function, this is what we actually see
function LoggedInHomePage() {
  return (
    <div class="mainWrapper">
      <div class="topBar">
        <div class="topPanel">
          <div class="logo">
            <img src="logo.png" class="logoImg" alt="missing logo" />
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
      <div class="searchedContent"></div>

      <div class="bottomBar"></div>
      <script></script>
    </div>
  );
}

export default LoggedInHomePage;
