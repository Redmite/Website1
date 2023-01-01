import React from "react";
// CSS imports
import "../Css/greetingPanel.css";
import "../Css/loginBox.css";
import "../Css/main.css";
import "../Css/popularServices.css";
import "../Css/topBar.css";

// home page function, this is what we actually see

function  HomePage() {
    return (
    
    <div class="mainWrapper">
            <div class="topBar">
                <div class="topPanel">
                    <div class="logo"><img src="logo.png" class="logoImg" alt="missing logo" /></div>
                    <div class="topOptions">
                        <li class="displayMd"><a href="#news">Find Job A</a></li>
                        <li class="displayLd"><a href="#news">List Job D</a></li>
                        <li class="displayMd"><a href="#news">Language C</a></li>
                        <li class="displaySd"><button class="signIn" id="show-login">Sign In B</button></li>
                        <li class="displaySd"><a href="SignUp.html" id="join-button">Join</a></li>
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
                    <div class="Service"><a href="#" class="serviceMath"><img src="logo.png" alt="missing pic" class="serviceMathImg" /></a></div>
                    <div class="Service">Language</div>
                    <div class="Service">Website Design</div>
                    <div class="Service">Video Production</div>
                    <div class="Service">GamingCoach</div>
                </div>
            </div>
            <div class="bottomContent"></div>
            <div class="tradeworkersExplanation"></div>
            <div class="bottomLinks"></div>


            <div class="loginWrapper">
                <div class="LoginContainer">
                    <div class="popup">
                        <div class="close-btn">&times;</div>
                        <div class="form">
                            <h2>Log in</h2>

                            <div class="form-element">
                                <label for="email">Email</label>
                                <input type="text" id="email" placeholder="Enter Email" />
                            </div>
                            <div class="form-element">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Enter Password" />
                            </div>
                            <div class="form-element">

                                <input type="checkbox" id="remember-me" />
                                <label for="remember-me">Remember me</label>
                            </div>
                            <div class="form-element">
                                <input type="submit" value="Continue" />
                            </div>
                            <div class="form-element">
                                <a href="#placeholder">Forgot password?</a>
                                <a href="#SignUp.html">Need an account?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><script src="src/Script/LoginScript.js"></script></div>
    );
}

export default HomePage;