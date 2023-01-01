import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/loggedOut/loginBox.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedOut/topBar.css";

// home page function, this is what we actually see

function  HomePage() {
    return (
    
    <div class="mainWrapper">
            <div class="topBar">
                <div class="topPanel">
                    <div class="logo"><img src="logo.png" class="logoImg" alt="missing logo" /></div>
                    <div class="topOptions">
                        <li class="displayMd"><a href="#news">Find Job A </a></li>
                        <li class="displayLd"><a href="#news">List Job D</a></li>
                        <li class="displayMd"><a href="/LoggedInHomePage">Language C</a></li>
                        <li class="displaySd"><a href="/SignInPage"><button class="signIn" id="show-login">Sign In B</button></a></li>
                        <li class="displaySd"><a href="/SignUpPage" id="join-button">Join</a></li>
                    </div>
                </div>
                <div class="greetingPanel">
                <div class="greetingSearch">
            <div class="">Learn a new skill</div>
          <form class="searchForm" action="action_page.html">
            <input type="text" placeholder="What skill do you want to learn?" class="greetingSearchBar"/>
            <button type="submit"><i class="submitSearchForm">Search</i></button>
          </form>

          <div class="">Don't know where to start? Need someone to push you?</div>
                    <div class="trustBar"></div>
                </div>
            </div>
            <div class="popularServices">
                <div class="popularServicesText"></div>
                <div class="popularServicesPanels">
                    <div class="Service"><a href="/placeholder" class="serviceMath"><img src="logo.png" alt="missing pic" class="serviceMathImg" /></a></div>
                    <div class="Service">Language</div>
                    <div class="Service">Website Design</div>
                    <div class="Service">Video Production</div>
                    <div class="Service">GamingCoach</div>
                </div>
            </div>
            <div class="bottomContent"></div>
            <div class="tradeworkersExplanation"></div>
            <div class="bottomLinks"></div>
        </div>
    </div>
    );
}

export default HomePage;