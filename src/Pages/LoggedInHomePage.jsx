
import React from "react";
// CSS imports
import "../Css/loggedOut/greetingPanel.css";
import "../Css/loggedOut/loginBox.css";
import "../Css/main.css";
import "../Css/loggedOut/popularServices.css";
import "../Css/loggedIn/topBar.css";

// home page function, this is what we actually see
function  LoggedInHomePage() {
    return (
    
    <div class="mainWrapper">
            <div class="topBar-LoggedIn">
                    <div class="logo"><img src="logo.png" class="logoImg" alt="missing logo" /></div>
                    <form class="topSearch" action="#news">
                    <input type="text" placeholder="What skill do you want to learn?" class="searchBar"/>
                    </form>
                    <div class="topBar-LoggedInRightSide">
                        <li class="topBarOrders"><a>Orders</a></li>
                        <li class="topBarSchedule"><a>Schedule</a></li>
                        <li class="topBarInbox"><img src="inbox.svg" class="topBarInboximg"></img></li>
                        <li class="topBarAccountProfile"><a href="#news"><img src="placeHolder.jpg" class="topBarAccountProfileImg"></img></a></li>
                    </div>
            <div class="createProject">
                
            </div>
        </div><script></script></div>
    );
}

export default LoggedInHomePage;