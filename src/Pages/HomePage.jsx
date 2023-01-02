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
                    <div class="logo"><img src="logo.svg" class="logoImg" alt="missing logo" /></div>
                    
                    <div class="topOptionsRightSide">
                        <li class="displayMd"><a href="#news" class="topBarOptionsLoggedOut">Become a Mentor</a></li>
                        <li class="displayLd"><a href="#news" class="WIP will be done much later makes no sense rn"></a></li>
                        <li class="displaySd"><a href="/LoggedInHomePage" class="topBarOptionsLoggedOut">Language C</a></li>
                        <li class="displaySd"><a href="/SignInPage"><button class="signIn" id="show-login">Sign In B</button></a></li>
                        <li class="displaySd"><a href="/SignUpPage" id="join-button">Join</a></li>
                    </div>
                </div>
                </div>
                <div class="greetingPanel">
                <div class="greetingSearch">
            <div class="">Learn a new skill</div>
            <form class="searchForm" action="action_page.html">
                <input type="text" placeholder="What skill do you want to learn?" class="greetingSearchBar"/>

            </form>
            <div class="headerWithLogoWords">
            Don't know where to start? Need someone to push you?
            </div>
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
            <div class="bottomBar"></div>

    </div>
    );
}

export default HomePage;