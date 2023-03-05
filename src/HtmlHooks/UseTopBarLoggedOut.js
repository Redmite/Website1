import React from 'react';
import logo from "../Images/logo.svg";
import SearchBar from "../JSHooks/UseSearchBar.js";

import "../Css/main.css";
import "../Css/loggedOut/topBar.css";
import "../Css/bottomBar.css";
import "../Css/searchedContent.css";

function UseTopBarLoggedOut() {
  return(
  <div class="topBar">
    <div class="topPanel">
    <a className="logo" href="https://gomentors.online/">
        <img src={logo} className="logoImg" alt="missing logo" />
      </a>
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
  )
}
export default UseTopBarLoggedOut;