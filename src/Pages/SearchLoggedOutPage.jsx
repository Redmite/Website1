import React from "react";
import CreatorCategories from "../Script/CreatorCategories";
// CSS imports
import "../Css/main.css";
import "../Css/loggedIn/topBar.css";
import "../Css/loggedOut/topBar.css";
import "../Css/loggedIn/mainContentLoggedIn.css";
// images
import logo from "../images/logo.svg";

// home page function, this is what we actually see
import SearchBar from "../Script/SearchBar";

function SearchLoggedOutPage(props) {
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
      <CreatorCategories category={props.category} />
      <script></script>
    </div>
  );
}

export default SearchLoggedOutPage;
